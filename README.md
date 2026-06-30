# Australia Tech Pulse

An open, auto-updating snapshot of the Australian technology job market, with a
focus on roles an Adelaide-based engineer can take: jobs located in Adelaide or
open to remote applicants across Australia. The data is collected automatically
from public company hiring feeds several times a day and committed straight back
to this repository, so the numbers below track the live market without anyone
touching a keyboard.

**Last updated:** Wed, 01 July 2026, 05:41 am (Adelaide time) · run #60

## Right now

| Metric | Count |
| --- | --- |
| Open tech roles tracked | **38** |
| Located in Adelaide or South Australia | **0** |
| Open to remote within Australia | **2** |
| Companies hiring | **6** |

## By field

```
Data Engineering            1  #...........................
Machine Learning & AI       5  ######......................
Cyber Security              2  ##..........................
Software Engineering       25  ############################
Cloud & DevOps              1  #...........................
Other Tech                  4  ####........................
```

## Trend

Open roles tracked across the last 60 runs:

<svg width="720" height="120" viewBox="0 0 720 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Open roles over time">
  <polyline fill="none" stroke="#22d3ee" stroke-width="2" points="8.0,49.6 19.9,49.6 31.9,49.6 43.8,49.6 55.7,49.6 67.7,49.6 79.6,49.6 91.5,49.6 103.5,49.6 115.4,49.6 127.3,28.8 139.3,8.0 151.2,8.0 163.1,8.0 175.1,28.8 187.0,28.8 198.9,28.8 210.8,28.8 222.8,28.8 234.7,28.8 246.6,91.2 258.6,91.2 270.5,91.2 282.4,91.2 294.4,91.2 306.3,91.2 318.2,91.2 330.2,91.2 342.1,91.2 354.0,91.2 366.0,91.2 377.9,91.2 389.8,112.0 401.8,112.0 413.7,112.0 425.6,112.0 437.6,112.0 449.5,112.0 461.4,112.0 473.4,112.0 485.3,112.0 497.2,112.0 509.2,112.0 521.1,112.0 533.0,112.0 544.9,112.0 556.9,112.0 568.8,112.0 580.7,112.0 592.7,112.0 604.6,91.2 616.5,91.2 628.5,91.2 640.4,91.2 652.3,91.2 664.3,70.4 676.2,49.6 688.1,49.6 700.1,49.6 712.0,49.6" />
  <circle cx="712.0" cy="49.6" r="3.5" fill="#22d3ee" />
</svg>

## Companies hiring the most

| # | Company | Open tech roles |
| --- | --- | --- |
| 1 | Easygo | 19 |
| 2 | The Trade Desk | 7 |
| 3 | Deputy | 5 |
| 4 | Culture Amp | 3 |
| 5 | Relevance AI | 3 |
| 6 | Bugcrowd | 1 |

## Newest roles

| Role | Company | Location | Field |
| --- | --- | --- | --- |
| [Senior Data Analyst - Kick (Modelling)](https://job-boards.greenhouse.io/easygo/jobs/5097649007) | Easygo | Melbourne, Australia | Data Engineering |
| [Senior Applied AI Engineer](https://job-boards.greenhouse.io/cultureamp/jobs/7573350) | Culture Amp | Melbourne | Machine Learning & AI |
| [Staff Software Engineer, Full-Stack (Sydney)](https://job-boards.greenhouse.io/easygo/jobs/5039619007) | Easygo | Sydney, Australia | Software Engineering |
| [Business Systems Engineer](https://jobs.lever.co/deputy/92507d93-e289-4ec0-8fff-060855512d51) | Deputy | Sydney | Other Tech |
| [Senior Frontend Engineer - Payments (Crypto & Fiat)](https://job-boards.greenhouse.io/easygo/jobs/5174724007) | Easygo | Melbourne, Australia | Software Engineering |
| [Application Security Engineer](https://boards.greenhouse.io/bugcrowd/jobs/8012371?gh_jid=8012371) | Bugcrowd | Remote - Brazil | Cyber Security |
| [Senior Software Engineer - (Full Stack) - Casino team](https://job-boards.greenhouse.io/easygo/jobs/5168017007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Frontend Engineer - KICK Creator Tools & Engagement](https://job-boards.greenhouse.io/easygo/jobs/5000593007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Software Engineer](https://job-boards.greenhouse.io/thetradedesk/jobs/5166572007) | The Trade Desk | Sydney | Software Engineering |
| [Senior Software Engineer - Device Experience](https://job-boards.greenhouse.io/easygo/jobs/5164497007) | Easygo | Melbourne, Australia | Software Engineering |
| [Staff Applied AI Scientist](https://job-boards.greenhouse.io/cultureamp/jobs/7994437) | Culture Amp | Melbourne | Machine Learning & AI |
| [Staff Applied AI Scientist](https://job-boards.greenhouse.io/cultureamp/jobs/7994439) | Culture Amp | Sydney | Machine Learning & AI |
| [Lead Platform Security Engineer](https://jobs.lever.co/deputy/5b856e9e-63ac-4be5-ba84-5564ff93f7c5) | Deputy | Australia | Cyber Security |
| [Software Engineer 3: Backend - 12 Month Fixed Term Contract](https://jobs.lever.co/deputy/183c3782-3b25-45cc-96a7-295746d08b75) | Deputy | Sydney | Software Engineering |
| [Technical Support Engineer - Tier 3](https://jobs.lever.co/deputy/5bb3ec32-8157-4115-8c34-b2e6ee04440c) | Deputy | Sydney | Other Tech |

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
