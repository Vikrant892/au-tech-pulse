import type { Board } from './seeds.js';

// One raw posting as it leaves a board fetcher, before categorisation.
export interface RawPosting {
  id: string;
  company: string;
  title: string;
  location: string;
  url: string;
  description: string;
}

const UA = 'adelaide-tech-pulse (+https://github.com/Vikrant892/adelaide-tech-pulse)';

async function getJson(url: string): Promise<unknown> {
  const res = await fetch(url, { headers: { 'user-agent': UA, accept: 'application/json' } });
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
}

export async function fetchBoard(b: Board): Promise<RawPosting[]> {
  switch (b.kind) {
    case 'greenhouse':
      return greenhouse(b);
    case 'lever':
      return lever(b);
    case 'workable':
      return workable(b);
    case 'ashby':
      return ashby(b);
  }
}

async function greenhouse(b: Board): Promise<RawPosting[]> {
  const data = (await getJson(
    `https://boards-api.greenhouse.io/v1/boards/${b.token}/jobs?content=true`,
  )) as { jobs?: GreenhouseJob[] };
  return (data.jobs ?? []).map((j) => ({
    id: `gh:${b.token}:${j.id}`,
    company: b.name,
    title: j.title,
    location: j.location?.name ?? '',
    url: j.absolute_url,
    description: stripTags(decodeEntities(j.content ?? '')),
  }));
}

async function lever(b: Board): Promise<RawPosting[]> {
  const data = (await getJson(`https://api.lever.co/v0/postings/${b.token}?mode=json`)) as LeverJob[];
  return (Array.isArray(data) ? data : []).map((j) => ({
    id: `lever:${b.token}:${j.id}`,
    company: b.name,
    title: j.text,
    location: j.categories?.location ?? '',
    url: j.hostedUrl,
    description: j.descriptionPlain ?? '',
  }));
}

async function workable(b: Board): Promise<RawPosting[]> {
  const data = (await getJson(
    `https://apply.workable.com/api/v1/widget/accounts/${b.token}?details=true`,
  )) as { jobs?: WorkableJob[] };
  return (data.jobs ?? []).map((j) => ({
    id: `wk:${b.token}:${j.shortcode}`,
    company: b.name,
    title: j.title,
    location: [j.city, j.country].filter(Boolean).join(', '),
    url: j.url,
    description: stripTags(decodeEntities(j.description ?? '')),
  }));
}

async function ashby(b: Board): Promise<RawPosting[]> {
  const data = (await getJson(
    `https://api.ashbyhq.com/posting-api/job-board/${b.token}`,
  )) as { jobs?: AshbyJob[] };
  return (data.jobs ?? []).map((j) => ({
    id: `ashby:${b.token}:${j.id}`,
    company: b.name,
    title: j.title,
    location: j.location ?? '',
    url: j.jobUrl,
    description: j.descriptionPlain ?? '',
  }));
}

export function stripTags(html: string): string {
  return html
    .replace(/<(br|\/p|\/div|\/li)[^>]*>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

interface GreenhouseJob {
  id: number;
  title: string;
  absolute_url: string;
  location?: { name?: string };
  content?: string;
}
interface LeverJob {
  id: string;
  text: string;
  hostedUrl: string;
  categories?: { location?: string };
  descriptionPlain?: string;
}
interface WorkableJob {
  shortcode: string;
  title: string;
  url: string;
  city?: string;
  country?: string;
  description?: string;
}
interface AshbyJob {
  id: string;
  title: string;
  jobUrl: string;
  location?: string;
  descriptionPlain?: string;
}
