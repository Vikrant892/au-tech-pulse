# Australia Tech Pulse

An open, auto-updating snapshot of the Australian technology job market, with a
focus on roles an Adelaide-based engineer can take: jobs located in Adelaide or
open to remote applicants across Australia. The data is collected automatically
from public company hiring feeds several times a day and committed straight back
to this repository, so the numbers below track the live market without anyone
touching a keyboard.

**Last updated:** Mon, 22 June 2026, 07:51 am (Adelaide time) · run #60

## Right now

| Metric | Count |
| --- | --- |
| Open tech roles tracked | **38** |
| Located in Adelaide or South Australia | **0** |
| Open to remote within Australia | **1** |
| Companies hiring | **6** |

## By field

```
Data Engineering            2  ##..........................
Machine Learning & AI       4  ####........................
Cyber Security              1  #...........................
Software Engineering       26  ############################
Cloud & DevOps              1  #...........................
Other Tech                  4  ####........................
```

## Trend

Open roles tracked across the last 60 runs:

<svg width="720" height="120" viewBox="0 0 720 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Open roles over time">
  <polyline fill="none" stroke="#22d3ee" stroke-width="2" points="8.0,60.0 19.9,60.0 31.9,60.0 43.8,60.0 55.7,60.0 67.7,60.0 79.6,60.0 91.5,60.0 103.5,8.0 115.4,8.0 127.3,8.0 139.3,8.0 151.2,8.0 163.1,8.0 175.1,8.0 187.0,8.0 198.9,8.0 210.8,8.0 222.8,8.0 234.7,8.0 246.6,8.0 258.6,8.0 270.5,8.0 282.4,8.0 294.4,8.0 306.3,60.0 318.2,60.0 330.2,60.0 342.1,60.0 354.0,60.0 366.0,60.0 377.9,60.0 389.8,60.0 401.8,112.0 413.7,8.0 425.6,8.0 437.6,8.0 449.5,8.0 461.4,8.0 473.4,8.0 485.3,8.0 497.2,8.0 509.2,8.0 521.1,8.0 533.0,8.0 544.9,8.0 556.9,8.0 568.8,8.0 580.7,8.0 592.7,8.0 604.6,8.0 616.5,8.0 628.5,8.0 640.4,8.0 652.3,8.0 664.3,8.0 676.2,8.0 688.1,8.0 700.1,8.0 712.0,8.0" />
  <circle cx="712.0" cy="8.0" r="3.5" fill="#22d3ee" />
</svg>

## Companies hiring the most

| # | Company | Open tech roles |
| --- | --- | --- |
| 1 | Easygo | 18 |
| 2 | The Trade Desk | 7 |
| 3 | Deputy | 5 |
| 4 | Brighte | 3 |
| 5 | Relevance AI | 3 |
| 6 | Culture Amp | 2 |

## Newest roles

| Role | Company | Location | Field |
| --- | --- | --- | --- |
| [Senior Frontend Engineer - KICK Creator Tools & Engagement](https://job-boards.greenhouse.io/easygo/jobs/5000593007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Software Engineer](https://job-boards.greenhouse.io/thetradedesk/jobs/5166572007) | The Trade Desk | Sydney | Software Engineering |
| [Senior Software Engineer - Device Experience](https://job-boards.greenhouse.io/easygo/jobs/5164497007) | Easygo | Melbourne, Australia | Software Engineering |
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
