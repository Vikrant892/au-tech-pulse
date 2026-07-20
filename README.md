# Australia Tech Pulse

An open, auto-updating snapshot of the Australian technology job market, with a
focus on roles an Adelaide-based engineer can take: jobs located in Adelaide or
open to remote applicants across Australia. The data is collected automatically
from public company hiring feeds several times a day and committed straight back
to this repository, so the numbers below track the live market without anyone
touching a keyboard.

**Last updated:** Mon, 20 July 2026, 11:57 pm (Adelaide time) · run #60

## Right now

| Metric | Count |
| --- | --- |
| Open tech roles tracked | **32** |
| Located in Adelaide or South Australia | **0** |
| Open to remote within Australia | **0** |
| Companies hiring | **6** |

## By field

```
Data Engineering            0  ............................
Machine Learning & AI       4  ######......................
Cyber Security              1  #...........................
Software Engineering       19  ############################
Cloud & DevOps              3  ####........................
Other Tech                  5  #######.....................
```

## Trend

Open roles tracked across the last 60 runs:

<svg width="720" height="120" viewBox="0 0 720 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Open roles over time">
  <polyline fill="none" stroke="#22d3ee" stroke-width="2" points="8.0,8.0 19.9,8.0 31.9,8.0 43.8,8.0 55.7,8.0 67.7,8.0 79.6,8.0 91.5,8.0 103.5,8.0 115.4,25.3 127.3,25.3 139.3,42.7 151.2,42.7 163.1,60.0 175.1,60.0 187.0,77.3 198.9,77.3 210.8,77.3 222.8,77.3 234.7,77.3 246.6,77.3 258.6,77.3 270.5,112.0 282.4,77.3 294.4,77.3 306.3,77.3 318.2,77.3 330.2,77.3 342.1,77.3 354.0,77.3 366.0,77.3 377.9,77.3 389.8,94.7 401.8,94.7 413.7,94.7 425.6,94.7 437.6,94.7 449.5,94.7 461.4,77.3 473.4,77.3 485.3,77.3 497.2,77.3 509.2,77.3 521.1,77.3 533.0,77.3 544.9,77.3 556.9,77.3 568.8,77.3 580.7,77.3 592.7,77.3 604.6,77.3 616.5,77.3 628.5,77.3 640.4,77.3 652.3,77.3 664.3,77.3 676.2,77.3 688.1,77.3 700.1,112.0 712.0,112.0" />
  <circle cx="712.0" cy="112.0" r="3.5" fill="#22d3ee" />
</svg>

## Companies hiring the most

| # | Company | Open tech roles |
| --- | --- | --- |
| 1 | Easygo | 14 |
| 2 | The Trade Desk | 7 |
| 3 | Relevance AI | 4 |
| 4 | Culture Amp | 3 |
| 5 | Deputy | 3 |
| 6 | Brighte | 1 |

## Newest roles

| Role | Company | Location | Field |
| --- | --- | --- | --- |
| [Sr Incident Response Engineer](https://job-boards.greenhouse.io/thetradedesk/jobs/5189449007) | The Trade Desk | Sydney | Cyber Security |
| [Lead DevOps Engineer](https://jobs.lever.co/deputy/ef5bcbd3-3b65-4c5e-8350-4af852113be9) | Deputy | Sydney | Cloud & DevOps |
| [Senior Frontend Engineer, Design Systems](https://jobs.lever.co/deputy/41506091-6b34-4bac-977c-c0ae7d342e1f) | Deputy | Sydney | Software Engineering |
| [Senior Frontend Engineer - KICK Discovery & Presence](https://job-boards.greenhouse.io/easygo/jobs/5174811007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Software Engineer - Engagement](https://job-boards.greenhouse.io/easygo/jobs/5123541007) | Easygo | Melbourne, Australia | Software Engineering |
| [Atlassian Engineer](https://job-boards.greenhouse.io/easygo/jobs/5153842007) | Easygo | Melbourne, Australia | Other Tech |
| [AI Deployment Strategist](https://jobs.ashbyhq.com/relevanceai/a104c172-046e-4e47-962c-de14f184b022) | Relevance AI | Sydney, Australia | Other Tech |
| [DevOps Engineer](https://jobs.lever.co/brighte/98f020ad-a2a2-4e97-8920-92136bb48e3e) | Brighte | Sydney, NSW | Cloud & DevOps |
| [Senior Applied AI Engineer](https://job-boards.greenhouse.io/cultureamp/jobs/7573350) | Culture Amp | Melbourne | Machine Learning & AI |
| [Staff Software Engineer, Full-Stack (Sydney)](https://job-boards.greenhouse.io/easygo/jobs/5039619007) | Easygo | Sydney, Australia | Software Engineering |
| [Senior Software Engineer](https://job-boards.greenhouse.io/thetradedesk/jobs/5166572007) | The Trade Desk | Sydney | Software Engineering |
| [Staff Applied AI Scientist](https://job-boards.greenhouse.io/cultureamp/jobs/7994439) | Culture Amp | Sydney | Machine Learning & AI |
| [Staff Applied AI Scientist](https://job-boards.greenhouse.io/cultureamp/jobs/7994437) | Culture Amp | Melbourne | Machine Learning & AI |
| [Technical Support Engineer - Tier 3](https://jobs.lever.co/deputy/5bb3ec32-8157-4115-8c34-b2e6ee04440c) | Deputy | Sydney | Other Tech |
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
