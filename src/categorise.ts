import type { Category } from './types.js';
import type { RawPosting } from './sources/boards.js';
import type { Board } from './sources/seeds.js';

const CATEGORY_RULES: { category: Category; terms: RegExp }[] = [
  { category: 'Machine Learning & AI', terms: /\b(machine learning|ml engineer|ai engineer|ai scientist|applied (ai|ml|scientist|scien)|data scien|deep learning|nlp|computer vision|\bllm\b|generative ai)\b/i },
  { category: 'Cyber Security', terms: /\b(security|cyber|threat|soc analyst|penetration|appsec|infosec|vulnerab|incident response)\b/i },
  { category: 'Data Engineering', terms: /\b(data engineer|analytics engineer|etl|elt|data platform|data warehouse|dbt|data pipeline|big data|analytics)\b/i },
  { category: 'Cloud & DevOps', terms: /\b(devops|sre|site reliability|platform engineer|infrastructure|cloud engineer|kubernetes|observability)\b/i },
  { category: 'Software Engineering', terms: /\b(software engineer|developer|backend|frontend|full[- ]?stack|mobile engineer|engineer ii|engineer i|programmer)\b/i },
];

// Only count genuinely technical roles. A company board carries sales,
// legal and people roles too. The signal is read from the TITLE only:
// company blurbs in the description mention "data" and "engineer" for
// every role, which would let the whole board through.
const TECH_SIGNAL = /\b(engineer|developer|data scien|data analyst|data engineer|machine learning|\bml\b|\bai\b|security|cyber|devops|sre|platform engineer|software|analytics engineer|cloud|programmer|architect|qa|tester|web developer)\b/i;

const NON_TECH = /\b(account executive|account development|account manager|sales|recruit|talent|people|marketing|legal|counsel|finance|accountant|controller|customer success|partnership|brand|content writer|administrat|project manager|programme manager|program manager|compliance|personal assistant|business development|implementation|expressions? of interest|office|reception|procurement|payroll)\b/i;

const SENIOR = /\b(senior|staff|principal|lead|head of|director|vp |chief|manager)\b/i;

const AU_LOCATION =
  /\b(australia|sydney|melbourne|adelaide|brisbane|perth|canberra|hobart|darwin|gold coast|wollongong|newcastle|geelong|nsw|vic|qld|act|tas|sa|remote|anywhere)\b/i;

// Clearly non-Australian locations. A role tagged "Remote - US" or
// "Remote - Massachusetts" is not open to someone working from Adelaide,
// so it is dropped even though it contains the word "remote".
const FOREIGN =
  /\b(united states|u\.?s\.?a?|america|canada|united kingdom|\buk\b|england|london|ireland|germany|france|netherlands|spain|india|singapore|philippines|japan|china|emea|latam|\beu\b|alabama|alaska|arizona|arkansas|california|colorado|connecticut|delaware|florida|georgia|hawaii|idaho|illinois|indiana|iowa|kansas|kentucky|louisiana|maine|maryland|massachusetts|michigan|minnesota|mississippi|missouri|montana|nebraska|nevada|hampshire|jersey|mexico|york|carolina|dakota|ohio|oklahoma|oregon|pennsylvania|rhode island|tennessee|texas|utah|vermont|virginia|washington|wisconsin|wyoming|seattle|austin|denver|boston|chicago|toronto)\b/i;

const ADELAIDE = /\b(adelaide|south australia|\bsa\b)\b/i;
const REMOTE = /\b(remote|anywhere|work from home|distributed|hybrid)\b/i;
const AU_CITY = /\b(sydney|melbourne|adelaide|brisbane|perth|canberra|hobart|darwin|gold coast|newcastle|wollongong|geelong)\b/i;

export function categorise(text: string): Category {
  for (const rule of CATEGORY_RULES) {
    if (rule.terms.test(text)) return rule.category;
  }
  return 'Other Tech';
}

export function isRelevant(p: RawPosting, board: Board): boolean {
  const titleLower = p.title.toLowerCase();
  if (NON_TECH.test(titleLower)) return false;
  // The tech signal must be in the title, not the company blurb.
  if (!TECH_SIGNAL.test(titleLower)) return false;
  // Location gate: an Adelaide-based company's role is always relevant;
  // otherwise the role must read as Australian or remote and not carry a
  // clearly foreign location.
  if (board.adelaide) return true;
  const where = `${p.title} ${p.location}`;
  if (FOREIGN.test(p.location)) return false;
  return AU_LOCATION.test(where);
}

export function isAdelaide(p: RawPosting, board: Board): boolean {
  return Boolean(board.adelaide) || ADELAIDE.test(`${p.location} ${p.title}`);
}

export function isRemote(p: RawPosting): boolean {
  if (FOREIGN.test(p.location)) return false;
  if (REMOTE.test(`${p.location} ${p.title}`)) return true;
  // A role whose location names the country but no city is nationally
  // accessible, which an Adelaide applicant can treat as remote.
  return /\baustralia\b/i.test(p.location) && !AU_CITY.test(p.location);
}

export function isSenior(title: string): boolean {
  return SENIOR.test(title.toLowerCase());
}
