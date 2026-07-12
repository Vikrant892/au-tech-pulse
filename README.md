# Australia Tech Pulse

An open, auto-updating snapshot of the Australian technology job market, with a
focus on roles an Adelaide-based engineer can take: jobs located in Adelaide or
open to remote applicants across Australia. The data is collected automatically
from public company hiring feeds several times a day and committed straight back
to this repository, so the numbers below track the live market without anyone
touching a keyboard.

**Last updated:** Sun, 12 July 2026, 01:16 pm (Adelaide time) · run #60

## Right now

| Metric | Count |
| --- | --- |
| Open tech roles tracked | **38** |
| Located in Adelaide or South Australia | **0** |
| Open to remote within Australia | **2** |
| Companies hiring | **7** |

## By field

```
Data Engineering            1  #...........................
Machine Learning & AI       4  #####.......................
Cyber Security              2  ###.........................
Software Engineering       22  ############################
Cloud & DevOps              2  ###.........................
Other Tech                  7  #########...................
```

## Trend

Open roles tracked across the last 60 runs:

<svg width="720" height="120" viewBox="0 0 720 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Open roles over time">
  <polyline fill="none" stroke="#22d3ee" stroke-width="2" points="8.0,42.7 19.9,42.7 31.9,42.7 43.8,42.7 55.7,42.7 67.7,77.3 79.6,112.0 91.5,112.0 103.5,112.0 115.4,112.0 127.3,112.0 139.3,112.0 151.2,112.0 163.1,112.0 175.1,112.0 187.0,112.0 198.9,112.0 210.8,112.0 222.8,112.0 234.7,112.0 246.6,112.0 258.6,112.0 270.5,112.0 282.4,112.0 294.4,112.0 306.3,42.7 318.2,42.7 330.2,42.7 342.1,42.7 354.0,8.0 366.0,42.7 377.9,42.7 389.8,42.7 401.8,42.7 413.7,42.7 425.6,42.7 437.6,42.7 449.5,42.7 461.4,42.7 473.4,42.7 485.3,42.7 497.2,77.3 509.2,42.7 521.1,42.7 533.0,42.7 544.9,42.7 556.9,42.7 568.8,42.7 580.7,42.7 592.7,42.7 604.6,42.7 616.5,42.7 628.5,42.7 640.4,42.7 652.3,42.7 664.3,42.7 676.2,42.7 688.1,42.7 700.1,42.7 712.0,42.7" />
  <circle cx="712.0" cy="42.7" r="3.5" fill="#22d3ee" />
</svg>

## Companies hiring the most

| # | Company | Open tech roles |
| --- | --- | --- |
| 1 | Easygo | 18 |
| 2 | The Trade Desk | 7 |
| 3 | Deputy | 4 |
| 4 | Relevance AI | 4 |
| 5 | Culture Amp | 3 |
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
| [Business Systems Engineer](https://jobs.lever.co/deputy/92507d93-e289-4ec0-8fff-060855512d51) | Deputy | Sydney | Other Tech |
| [Application Security Engineer](https://boards.greenhouse.io/bugcrowd/jobs/8012371?gh_jid=8012371) | Bugcrowd | Remote - Brazil | Cyber Security |
| [Senior Software Engineer - (Full Stack) - Casino team](https://job-boards.greenhouse.io/easygo/jobs/5168017007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Frontend Engineer - KICK Creator Tools & Engagement](https://job-boards.greenhouse.io/easygo/jobs/5000593007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Software Engineer](https://job-boards.greenhouse.io/thetradedesk/jobs/5166572007) | The Trade Desk | Sydney | Software Engineering |
| [Senior Software Engineer - Device Experience](https://job-boards.greenhouse.io/easygo/jobs/5164497007) | Easygo | Melbourne, Australia | Software Engineering |
| [Staff Applied AI Scientist](https://job-boards.greenhouse.io/cultureamp/jobs/7994439) | Culture Amp | Sydney | Machine Learning & AI |

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
