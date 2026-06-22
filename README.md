# Australia Tech Pulse

An open, auto-updating snapshot of the Australian technology job market, with a
focus on roles an Adelaide-based engineer can take: jobs located in Adelaide or
open to remote applicants across Australia. The data is collected automatically
from public company hiring feeds several times a day and committed straight back
to this repository, so the numbers below track the live market without anyone
touching a keyboard.

**Last updated:** Mon, 22 June 2026, 02:53 pm (Adelaide time) · run #60

## Right now

| Metric | Count |
| --- | --- |
| Open tech roles tracked | **39** |
| Located in Adelaide or South Australia | **0** |
| Open to remote within Australia | **1** |
| Companies hiring | **6** |

## By field

```
Data Engineering            2  ##..........................
Machine Learning & AI       4  ####........................
Cyber Security              1  #...........................
Software Engineering       27  ############################
Cloud & DevOps              1  #...........................
Other Tech                  4  ####........................
```

## Trend

Open roles tracked across the last 60 runs:

<svg width="720" height="120" viewBox="0 0 720 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Open roles over time">
  <polyline fill="none" stroke="#22d3ee" stroke-width="2" points="8.0,77.3 19.9,77.3 31.9,77.3 43.8,77.3 55.7,77.3 67.7,77.3 79.6,77.3 91.5,42.7 103.5,42.7 115.4,42.7 127.3,42.7 139.3,42.7 151.2,42.7 163.1,42.7 175.1,42.7 187.0,42.7 198.9,42.7 210.8,42.7 222.8,42.7 234.7,42.7 246.6,42.7 258.6,42.7 270.5,42.7 282.4,42.7 294.4,77.3 306.3,77.3 318.2,77.3 330.2,77.3 342.1,77.3 354.0,77.3 366.0,77.3 377.9,77.3 389.8,112.0 401.8,42.7 413.7,42.7 425.6,42.7 437.6,42.7 449.5,42.7 461.4,42.7 473.4,42.7 485.3,42.7 497.2,42.7 509.2,42.7 521.1,42.7 533.0,42.7 544.9,42.7 556.9,42.7 568.8,42.7 580.7,42.7 592.7,42.7 604.6,42.7 616.5,42.7 628.5,42.7 640.4,42.7 652.3,42.7 664.3,42.7 676.2,42.7 688.1,42.7 700.1,42.7 712.0,8.0" />
  <circle cx="712.0" cy="8.0" r="3.5" fill="#22d3ee" />
</svg>

## Companies hiring the most

| # | Company | Open tech roles |
| --- | --- | --- |
| 1 | Easygo | 19 |
| 2 | The Trade Desk | 7 |
| 3 | Deputy | 5 |
| 4 | Brighte | 3 |
| 5 | Relevance AI | 3 |
| 6 | Culture Amp | 2 |

## Newest roles

| Role | Company | Location | Field |
| --- | --- | --- | --- |
| [Senior Software Engineer - (Full Stack) - Casino team](https://job-boards.greenhouse.io/easygo/jobs/5168017007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Frontend Engineer - KICK Creator Tools & Engagement](https://job-boards.greenhouse.io/easygo/jobs/5000593007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Software Engineer](https://job-boards.greenhouse.io/thetradedesk/jobs/5166572007) | The Trade Desk | Sydney | Software Engineering |
| [Senior Software Engineer - Device Experience](https://job-boards.greenhouse.io/easygo/jobs/5164497007) | Easygo | Melbourne, Australia | Software Engineering |
| [Junior Developer](https://jobs.lever.co/brighte/d517f33f-d99b-4a53-ba7c-507812ca00d4) | Brighte | Sydney, NSW | Software Engineering |
| [Analytics Engineer](https://jobs.lever.co/brighte/e608ba39-9212-4496-95cf-ffc04443d9a7) | Brighte | Sydney, NSW | Data Engineering |
| [Data Engineer](https://jobs.lever.co/brighte/808e8761-1ad9-41ba-8892-0405a5405b1a) | Brighte | Sydney, NSW | Data Engineering |
| [Staff Applied AI Scientist](https://job-boards.greenhouse.io/cultureamp/jobs/7994439) | Culture Amp | Sydney | Machine Learning & AI |
| [Staff Applied AI Scientist](https://job-boards.greenhouse.io/cultureamp/jobs/7994437) | Culture Amp | Melbourne | Machine Learning & AI |
| [Lead Platform Security Engineer](https://jobs.lever.co/deputy/5b856e9e-63ac-4be5-ba84-5564ff93f7c5) | Deputy | Australia | Cyber Security |
| [Senior Design Systems Engineer](https://jobs.lever.co/deputy/5f469019-9067-4707-8419-afdcaf8b275f) | Deputy | Sydney | Other Tech |
| [Software Engineer 3: Backend - 12 Month Fixed Term Contract](https://jobs.lever.co/deputy/183c3782-3b25-45cc-96a7-295746d08b75) | Deputy | Sydney | Software Engineering |
| [Technical Support Engineer - Tier 3](https://jobs.lever.co/deputy/5bb3ec32-8157-4115-8c34-b2e6ee04440c) | Deputy | Sydney | Other Tech |
| [Website Developer](https://jobs.lever.co/deputy/c52fd923-09aa-4d88-9843-52a38e1a620b) | Deputy | Sydney | Software Engineering |
| [Junior MLOps Engineer](https://job-boards.greenhouse.io/easygo/jobs/5159569007) | Easygo | Melbourne, Australia | Machine Learning & AI |

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
