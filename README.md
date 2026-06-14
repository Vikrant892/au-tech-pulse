# Australia Tech Pulse

An open, auto-updating snapshot of the Australian technology job market, with a
focus on roles an Adelaide-based engineer can take: jobs located in Adelaide or
open to remote applicants across Australia. The data is collected automatically
from public company hiring feeds several times a day and committed straight back
to this repository, so the numbers below track the live market without anyone
touching a keyboard.

**Last updated:** Sun, 14 June 2026, 07:22 pm (Adelaide time) · run #24

## Right now

| Metric | Count |
| --- | --- |
| Open tech roles tracked | **38** |
| Located in Adelaide or South Australia | **0** |
| Open to remote within Australia | **1** |
| Companies hiring | **6** |

## By field

```
Data Engineering            3  ###.........................
Machine Learning & AI       4  ####........................
Cyber Security              1  #...........................
Software Engineering       25  ############################
Cloud & DevOps              1  #...........................
Other Tech                  4  ####........................
```

## Trend

Open roles tracked across the last 24 runs:

<svg width="720" height="120" viewBox="0 0 720 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Open roles over time">
  <polyline fill="none" stroke="#22d3ee" stroke-width="2" points="8.0,112.0 38.6,112.0 69.2,112.0 99.8,112.0 130.4,112.0 161.0,112.0 191.7,112.0 222.3,112.0 252.9,112.0 283.5,112.0 314.1,112.0 344.7,8.0 375.3,8.0 405.9,8.0 436.5,8.0 467.1,8.0 497.7,8.0 528.3,8.0 559.0,8.0 589.6,8.0 620.2,8.0 650.8,8.0 681.4,8.0 712.0,8.0" />
  <circle cx="712.0" cy="8.0" r="3.5" fill="#22d3ee" />
</svg>

## Companies hiring the most

| # | Company | Open tech roles |
| --- | --- | --- |
| 1 | Easygo | 18 |
| 2 | The Trade Desk | 6 |
| 3 | Deputy | 5 |
| 4 | Brighte | 4 |
| 5 | Relevance AI | 3 |
| 6 | Culture Amp | 2 |

## Newest roles

| Role | Company | Location | Field |
| --- | --- | --- | --- |
| [Junior Developer](https://jobs.lever.co/brighte/05ee3c74-5cb3-496e-840f-b74f13c43f47) | Brighte | Sydney, NSW | Software Engineering |
| [Junior Developer](https://jobs.lever.co/brighte/d517f33f-d99b-4a53-ba7c-507812ca00d4) | Brighte | Sydney, NSW | Software Engineering |
| [Analytics Engineer](https://jobs.lever.co/brighte/e608ba39-9212-4496-95cf-ffc04443d9a7) | Brighte | Sydney, NSW | Data Engineering |
| [Data Engineer](https://jobs.lever.co/brighte/808e8761-1ad9-41ba-8892-0405a5405b1a) | Brighte | Sydney, NSW | Data Engineering |
| [Staff Applied AI Scientist](https://job-boards.greenhouse.io/cultureamp/jobs/7994437) | Culture Amp | Melbourne | Machine Learning & AI |
| [Staff Applied AI Scientist](https://job-boards.greenhouse.io/cultureamp/jobs/7994439) | Culture Amp | Sydney | Machine Learning & AI |
| [Lead Platform Security Engineer](https://jobs.lever.co/deputy/5b856e9e-63ac-4be5-ba84-5564ff93f7c5) | Deputy | Australia | Cyber Security |
| [Senior Design Systems Engineer](https://jobs.lever.co/deputy/5f469019-9067-4707-8419-afdcaf8b275f) | Deputy | Sydney | Other Tech |
| [Software Engineer 3: Backend - 12 Month Fixed Term Contract](https://jobs.lever.co/deputy/183c3782-3b25-45cc-96a7-295746d08b75) | Deputy | Sydney | Software Engineering |
| [Technical Support Engineer - Tier 3](https://jobs.lever.co/deputy/5bb3ec32-8157-4115-8c34-b2e6ee04440c) | Deputy | Sydney | Other Tech |
| [Website Developer](https://jobs.lever.co/deputy/c52fd923-09aa-4d88-9843-52a38e1a620b) | Deputy | Sydney | Software Engineering |
| [Junior MLOps Engineer](https://job-boards.greenhouse.io/easygo/jobs/5159569007) | Easygo | Melbourne, Australia | Machine Learning & AI |
| [Senior Backend Engineer - KICK Platform Trust](https://job-boards.greenhouse.io/easygo/jobs/5146144007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Data Analyst - Kick](https://job-boards.greenhouse.io/easygo/jobs/5097649007) | Easygo | Melbourne, Australia | Data Engineering |
| [Senior Front-End Software Engineer, Sportsbook](https://job-boards.greenhouse.io/easygo/jobs/4540003007) | Easygo | Melbourne, Australia | Software Engineering |

## How it works

A scheduled GitHub Action pulls the public job feeds (Greenhouse, Lever, Ashby)
of a watchlist of Australian technology employers, keeps the roles located in
Australia or open to remote applicants, sorts them into fields, and writes three
data files:

- [`data/timeseries.csv`](data/timeseries.csv) one row per run, the headline counts over time
- [`data/latest.json`](data/latest.json) every open role in the current snapshot
- [`data/changes.md`](data/changes.md) a running log of roles that appeared or closed

No API keys, no scraping of private pages, no personal data. Everything is
sourced from feeds the companies publish for their own careers pages.

## Why this exists

Job boards show you a slice of a single day. A time series shows you where the
market is moving: which fields are growing, which companies are scaling, and how
much of the work is open to remote applicants. South Australian employers mostly
hire through systems without public feeds, so the local-only count runs lean and
the real opportunity for an Adelaide engineer is the remote-Australia market.
This repository keeps that record in the open.

## Licence

MIT. The collected data is public information; the code is free to reuse.
