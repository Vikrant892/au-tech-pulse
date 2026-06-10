import { describe, it, expect } from 'vitest';
import { categorise, isRelevant, isAdelaide, isRemote, isSenior } from '../src/categorise.js';
import type { RawPosting } from '../src/sources/boards.js';
import type { Board } from '../src/sources/seeds.js';

const NATIONAL: Board = { name: 'Acme', kind: 'greenhouse', token: 'acme' };
const SA: Board = { name: 'Fivecast', kind: 'greenhouse', token: 'fivecast', adelaide: true };

function posting(over: Partial<RawPosting>): RawPosting {
  return { id: '1', company: 'Acme', title: '', location: '', url: '', description: '', ...over };
}

describe('categorise', () => {
  it('sorts roles into the right field', () => {
    expect(categorise('Machine Learning Engineer, anomaly detection')).toBe('Machine Learning & AI');
    expect(categorise('Staff Applied AI Scientist')).toBe('Machine Learning & AI');
    expect(categorise('Security Analyst, SOC')).toBe('Cyber Security');
    expect(categorise('Data Engineer, dbt and Snowflake')).toBe('Data Engineering');
    expect(categorise('Site Reliability Engineer, Kubernetes')).toBe('Cloud & DevOps');
    expect(categorise('Backend Software Engineer')).toBe('Software Engineering');
    expect(categorise('Office Coordinator')).toBe('Other Tech');
  });
});

describe('isRelevant', () => {
  it('keeps AU and remote tech roles', () => {
    expect(isRelevant(posting({ title: 'Data Engineer', location: 'Sydney, NSW' }), NATIONAL)).toBe(true);
    expect(isRelevant(posting({ title: 'ML Engineer', location: 'Remote, Australia' }), NATIONAL)).toBe(true);
  });

  it('drops foreign-office and non-tech roles', () => {
    expect(isRelevant(posting({ title: 'Data Engineer', location: 'London, UK' }), NATIONAL)).toBe(false);
    expect(isRelevant(posting({ title: 'Account Executive', location: 'Sydney' }), NATIONAL)).toBe(false);
    expect(isRelevant(posting({ title: 'Recruiter', location: 'Adelaide' }), SA)).toBe(false);
  });

  it('drops US-remote roles that an Adelaide worker cannot take', () => {
    expect(isRelevant(posting({ title: 'Software Engineer', location: 'Remote - US' }), NATIONAL)).toBe(false);
    expect(isRelevant(posting({ title: 'Security Engineer', location: 'Remote - Massachusetts, New York' }), NATIONAL)).toBe(false);
    expect(isRelevant(posting({ title: 'Backend Engineer', location: 'Remote' }), NATIONAL)).toBe(true);
    expect(isRelevant(posting({ title: 'Backend Engineer', location: 'Remote - Australia' }), NATIONAL)).toBe(true);
  });

  it('always keeps a SA company tech role regardless of stated location', () => {
    expect(isRelevant(posting({ title: 'Software Engineer', location: '' }), SA)).toBe(true);
  });
});

describe('location flags', () => {
  it('detects Adelaide from company or location', () => {
    expect(isAdelaide(posting({ location: 'Adelaide, SA' }), NATIONAL)).toBe(true);
    expect(isAdelaide(posting({ location: 'Sydney' }), SA)).toBe(true);
    expect(isAdelaide(posting({ location: 'Melbourne' }), NATIONAL)).toBe(false);
  });

  it('detects remote', () => {
    expect(isRemote(posting({ location: 'Remote, Australia' }))).toBe(true);
    expect(isRemote(posting({ title: 'Engineer (work from home)' }))).toBe(true);
    expect(isRemote(posting({ location: 'Adelaide' }))).toBe(false);
  });
});

describe('isSenior', () => {
  it('flags senior titles', () => {
    expect(isSenior('Senior Data Engineer')).toBe(true);
    expect(isSenior('Head of Security')).toBe(true);
    expect(isSenior('Graduate Software Engineer')).toBe(false);
  });
});
