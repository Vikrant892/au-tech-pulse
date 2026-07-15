# Australia Tech Pulse

An open, auto-updating snapshot of the Australian technology job market, with a
focus on roles an Adelaide-based engineer can take: jobs located in Adelaide or
open to remote applicants across Australia. The data is collected automatically
from public company hiring feeds several times a day and committed straight back
to this repository, so the numbers below track the live market without anyone
touching a keyboard.

**Last updated:** Thu, 16 July 2026, 02:10 am (Adelaide time) · run #60

## Right now

| Metric | Count |
| --- | --- |
| Open tech roles tracked | **34** |
| Located in Adelaide or South Australia | **0** |
| Open to remote within Australia | **2** |
| Companies hiring | **7** |

## By field

```
Data Engineering            0  ............................
Machine Learning & AI       4  ######......................
Cyber Security              2  ###.........................
Software Engineering       20  ############################
Cloud & DevOps              2  ###.........................
Other Tech                  6  ########....................
```

## Trend

Open roles tracked across the last 60 runs:

<svg width="720" height="120" viewBox="0 0 720 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Open roles over time">
  <polyline fill="none" stroke="#22d3ee" stroke-width="2" points="8.0,52.6 19.9,22.9 31.9,22.9 43.8,22.9 55.7,22.9 67.7,8.0 79.6,22.9 91.5,22.9 103.5,22.9 115.4,22.9 127.3,22.9 139.3,22.9 151.2,22.9 163.1,22.9 175.1,22.9 187.0,22.9 198.9,22.9 210.8,37.7 222.8,22.9 234.7,22.9 246.6,22.9 258.6,22.9 270.5,22.9 282.4,22.9 294.4,22.9 306.3,22.9 318.2,22.9 330.2,22.9 342.1,22.9 354.0,22.9 366.0,22.9 377.9,22.9 389.8,22.9 401.8,22.9 413.7,22.9 425.6,22.9 437.6,22.9 449.5,22.9 461.4,22.9 473.4,22.9 485.3,22.9 497.2,22.9 509.2,37.7 521.1,37.7 533.0,52.6 544.9,52.6 556.9,67.4 568.8,67.4 580.7,82.3 592.7,82.3 604.6,82.3 616.5,82.3 628.5,82.3 640.4,82.3 652.3,82.3 664.3,112.0 676.2,82.3 688.1,82.3 700.1,82.3 712.0,82.3" />
  <circle cx="712.0" cy="82.3" r="3.5" fill="#22d3ee" />
</svg>

## Companies hiring the most

| # | Company | Open tech roles |
| --- | --- | --- |
| 1 | Easygo | 16 |
| 2 | The Trade Desk | 6 |
| 3 | Relevance AI | 4 |
| 4 | Culture Amp | 3 |
| 5 | Deputy | 3 |
| 6 | Brighte | 1 |
| 7 | Bugcrowd | 1 |

## Newest roles

| Role | Company | Location | Field |
| --- | --- | --- | --- |
| [Senior Frontend Engineer - KICK Discovery & Presence](https://job-boards.greenhouse.io/easygo/jobs/5174811007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Software Engineer - Engagement](https://job-boards.greenhouse.io/easygo/jobs/5123541007) | Easygo | Melbourne, Australia | Software Engineering |
| [Software Engineer - Design Systems](https://job-boards.greenhouse.io/easygo/jobs/4585417007) | Easygo | Melbourne, Australia | Software Engineering |
| [Atlassian Engineer](https://job-boards.greenhouse.io/easygo/jobs/5153842007) | Easygo | Melbourne, Australia | Other Tech |
| [AI Deployment Strategist](https://jobs.ashbyhq.com/relevanceai/a104c172-046e-4e47-962c-de14f184b022) | Relevance AI | Sydney, Australia | Other Tech |
| [DevOps Engineer](https://jobs.lever.co/brighte/98f020ad-a2a2-4e97-8920-92136bb48e3e) | Brighte | Sydney, NSW | Cloud & DevOps |
| [Design Systems Engineer](https://jobs.lever.co/deputy/5dcaffbc-79bd-4e4f-9494-c7d243d5ce06) | Deputy | Sydney | Other Tech |
| [Senior Applied AI Engineer](https://job-boards.greenhouse.io/cultureamp/jobs/7573350) | Culture Amp | Melbourne | Machine Learning & AI |
| [Staff Software Engineer, Full-Stack (Sydney)](https://job-boards.greenhouse.io/easygo/jobs/5039619007) | Easygo | Sydney, Australia | Software Engineering |
| [Application Security Engineer](https://boards.greenhouse.io/bugcrowd/jobs/8012371?gh_jid=8012371) | Bugcrowd | Remote - Brazil | Cyber Security |
| [Senior Frontend Engineer - KICK Creator Tools & Engagement](https://job-boards.greenhouse.io/easygo/jobs/5000593007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Software Engineer](https://job-boards.greenhouse.io/thetradedesk/jobs/5166572007) | The Trade Desk | Sydney | Software Engineering |
| [Staff Applied AI Scientist](https://job-boards.greenhouse.io/cultureamp/jobs/7994439) | Culture Amp | Sydney | Machine Learning & AI |
| [Staff Applied AI Scientist](https://job-boards.greenhouse.io/cultureamp/jobs/7994437) | Culture Amp | Melbourne | Machine Learning & AI |
| [Lead Platform Security Engineer](https://jobs.lever.co/deputy/5b856e9e-63ac-4be5-ba84-5564ff93f7c5) | Deputy | Australia | Cyber Security |

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
