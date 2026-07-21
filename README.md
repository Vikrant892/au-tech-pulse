# Australia Tech Pulse

An open, auto-updating snapshot of the Australian technology job market, with a
focus on roles an Adelaide-based engineer can take: jobs located in Adelaide or
open to remote applicants across Australia. The data is collected automatically
from public company hiring feeds several times a day and committed straight back
to this repository, so the numbers below track the live market without anyone
touching a keyboard.

**Last updated:** Wed, 22 July 2026, 07:39 am (Adelaide time) · run #60

## Right now

| Metric | Count |
| --- | --- |
| Open tech roles tracked | **35** |
| Located in Adelaide or South Australia | **0** |
| Open to remote within Australia | **0** |
| Companies hiring | **6** |

## By field

```
Data Engineering            0  ............................
Machine Learning & AI       4  ######......................
Cyber Security              1  #...........................
Software Engineering       20  ############################
Cloud & DevOps              4  ######......................
Other Tech                  6  ########....................
```

## Trend

Open roles tracked across the last 60 runs:

<svg width="720" height="120" viewBox="0 0 720 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Open roles over time">
  <polyline fill="none" stroke="#22d3ee" stroke-width="2" points="8.0,8.0 19.9,28.8 31.9,28.8 43.8,49.6 55.7,49.6 67.7,70.4 79.6,70.4 91.5,70.4 103.5,70.4 115.4,70.4 127.3,70.4 139.3,70.4 151.2,112.0 163.1,70.4 175.1,70.4 187.0,70.4 198.9,70.4 210.8,70.4 222.8,70.4 234.7,70.4 246.6,70.4 258.6,70.4 270.5,91.2 282.4,91.2 294.4,91.2 306.3,91.2 318.2,91.2 330.2,91.2 342.1,70.4 354.0,70.4 366.0,70.4 377.9,70.4 389.8,70.4 401.8,70.4 413.7,70.4 425.6,70.4 437.6,70.4 449.5,70.4 461.4,70.4 473.4,70.4 485.3,70.4 497.2,70.4 509.2,70.4 521.1,70.4 533.0,70.4 544.9,70.4 556.9,70.4 568.8,70.4 580.7,112.0 592.7,112.0 604.6,112.0 616.5,112.0 628.5,112.0 640.4,49.6 652.3,49.6 664.3,49.6 676.2,49.6 688.1,49.6 700.1,49.6 712.0,49.6" />
  <circle cx="712.0" cy="49.6" r="3.5" fill="#22d3ee" />
</svg>

## Companies hiring the most

| # | Company | Open tech roles |
| --- | --- | --- |
| 1 | Easygo | 17 |
| 2 | The Trade Desk | 7 |
| 3 | Relevance AI | 4 |
| 4 | Culture Amp | 3 |
| 5 | Deputy | 3 |
| 6 | Brighte | 1 |

## Newest roles

| Role | Company | Location | Field |
| --- | --- | --- | --- |
| [Senior Backend Engineer - Engine](https://job-boards.greenhouse.io/easygo/jobs/5191644007) | Easygo | Melbourne, Australia | Cloud & DevOps |
| [Software Engineer, Mobile (Android)](https://job-boards.greenhouse.io/easygo/jobs/5151058007) | Easygo | Melbourne | Software Engineering |
| [Software Engineering Manager](https://job-boards.greenhouse.io/easygo/jobs/5152558007) | Easygo | Melbourne | Other Tech |
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
