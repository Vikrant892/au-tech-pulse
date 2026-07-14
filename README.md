# Australia Tech Pulse

An open, auto-updating snapshot of the Australian technology job market, with a
focus on roles an Adelaide-based engineer can take: jobs located in Adelaide or
open to remote applicants across Australia. The data is collected automatically
from public company hiring feeds several times a day and committed straight back
to this repository, so the numbers below track the live market without anyone
touching a keyboard.

**Last updated:** Wed, 15 July 2026, 01:52 am (Adelaide time) · run #60

## Right now

| Metric | Count |
| --- | --- |
| Open tech roles tracked | **34** |
| Located in Adelaide or South Australia | **0** |
| Open to remote within Australia | **2** |
| Companies hiring | **7** |

## By field

```
Data Engineering            1  #...........................
Machine Learning & AI       4  ######......................
Cyber Security              2  ###.........................
Software Engineering       19  ############################
Cloud & DevOps              2  ###.........................
Other Tech                  6  #########...................
```

## Trend

Open roles tracked across the last 60 runs:

<svg width="720" height="120" viewBox="0 0 720 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Open roles over time">
  <polyline fill="none" stroke="#22d3ee" stroke-width="2" points="8.0,70.4 19.9,70.4 31.9,70.4 43.8,70.4 55.7,70.4 67.7,70.4 79.6,70.4 91.5,70.4 103.5,28.8 115.4,28.8 127.3,28.8 139.3,28.8 151.2,8.0 163.1,28.8 175.1,28.8 187.0,28.8 198.9,28.8 210.8,28.8 222.8,28.8 234.7,28.8 246.6,28.8 258.6,28.8 270.5,28.8 282.4,28.8 294.4,49.6 306.3,28.8 318.2,28.8 330.2,28.8 342.1,28.8 354.0,28.8 366.0,28.8 377.9,28.8 389.8,28.8 401.8,28.8 413.7,28.8 425.6,28.8 437.6,28.8 449.5,28.8 461.4,28.8 473.4,28.8 485.3,28.8 497.2,28.8 509.2,28.8 521.1,28.8 533.0,28.8 544.9,28.8 556.9,28.8 568.8,28.8 580.7,28.8 592.7,49.6 604.6,49.6 616.5,70.4 628.5,70.4 640.4,91.2 652.3,91.2 664.3,112.0 676.2,112.0 688.1,112.0 700.1,112.0 712.0,112.0" />
  <circle cx="712.0" cy="112.0" r="3.5" fill="#22d3ee" />
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
| [Software Engineer - Design Systems](https://job-boards.greenhouse.io/easygo/jobs/4585417007) | Easygo | Melbourne, Australia | Software Engineering |
| [Atlassian Engineer](https://job-boards.greenhouse.io/easygo/jobs/5153842007) | Easygo | Melbourne, Australia | Other Tech |
| [AI Deployment Strategist](https://jobs.ashbyhq.com/relevanceai/a104c172-046e-4e47-962c-de14f184b022) | Relevance AI | Sydney, Australia | Other Tech |
| [DevOps Engineer](https://jobs.lever.co/brighte/98f020ad-a2a2-4e97-8920-92136bb48e3e) | Brighte | Sydney, NSW | Cloud & DevOps |
| [Design Systems Engineer](https://jobs.lever.co/deputy/5dcaffbc-79bd-4e4f-9494-c7d243d5ce06) | Deputy | Sydney | Other Tech |
| [Senior Data Analyst - Kick (Modelling)](https://job-boards.greenhouse.io/easygo/jobs/5097649007) | Easygo | Melbourne, Australia | Data Engineering |
| [Senior Applied AI Engineer](https://job-boards.greenhouse.io/cultureamp/jobs/7573350) | Culture Amp | Melbourne | Machine Learning & AI |
| [Staff Software Engineer, Full-Stack (Sydney)](https://job-boards.greenhouse.io/easygo/jobs/5039619007) | Easygo | Sydney, Australia | Software Engineering |
| [Application Security Engineer](https://boards.greenhouse.io/bugcrowd/jobs/8012371?gh_jid=8012371) | Bugcrowd | Remote - Brazil | Cyber Security |
| [Senior Software Engineer - (Full Stack) - Casino team](https://job-boards.greenhouse.io/easygo/jobs/5168017007) | Easygo | Melbourne, Australia | Software Engineering |
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
