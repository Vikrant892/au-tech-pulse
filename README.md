# Australia Tech Pulse

An open, auto-updating snapshot of the Australian technology job market, with a
focus on roles an Adelaide-based engineer can take: jobs located in Adelaide or
open to remote applicants across Australia. The data is collected automatically
from public company hiring feeds several times a day and committed straight back
to this repository, so the numbers below track the live market without anyone
touching a keyboard.

**Last updated:** Thu, 13 Aug 2026, 07:25 am (Adelaide time) · run #60

## Right now

| Metric | Count |
| --- | --- |
| Open tech roles tracked | **29** |
| Located in Adelaide or South Australia | **0** |
| Open to remote within Australia | **0** |
| Companies hiring | **6** |

## By field

```
Data Engineering            2  ######......................
Machine Learning & AI       4  ###########.................
Cyber Security              2  ######......................
Software Engineering       10  ############################
Cloud & DevOps              4  ###########.................
Other Tech                  7  ####################........
```

## Trend

Open roles tracked across the last 60 runs:

<svg width="720" height="120" viewBox="0 0 720 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Open roles over time">
  <polyline fill="none" stroke="#22d3ee" stroke-width="2" points="8.0,8.0 19.9,42.7 31.9,42.7 43.8,42.7 55.7,42.7 67.7,42.7 79.6,42.7 91.5,77.3 103.5,77.3 115.4,42.7 127.3,42.7 139.3,42.7 151.2,42.7 163.1,42.7 175.1,42.7 187.0,42.7 198.9,42.7 210.8,42.7 222.8,42.7 234.7,42.7 246.6,42.7 258.6,42.7 270.5,42.7 282.4,42.7 294.4,42.7 306.3,42.7 318.2,42.7 330.2,42.7 342.1,42.7 354.0,42.7 366.0,42.7 377.9,42.7 389.8,42.7 401.8,42.7 413.7,42.7 425.6,77.3 437.6,77.3 449.5,77.3 461.4,77.3 473.4,77.3 485.3,112.0 497.2,112.0 509.2,112.0 521.1,112.0 533.0,112.0 544.9,112.0 556.9,112.0 568.8,112.0 580.7,112.0 592.7,112.0 604.6,112.0 616.5,112.0 628.5,112.0 640.4,112.0 652.3,112.0 664.3,112.0 676.2,112.0 688.1,112.0 700.1,112.0 712.0,112.0" />
  <circle cx="712.0" cy="112.0" r="3.5" fill="#22d3ee" />
</svg>

## Companies hiring the most

| # | Company | Open tech roles |
| --- | --- | --- |
| 1 | Easygo | 12 |
| 2 | Relevance AI | 6 |
| 3 | The Trade Desk | 5 |
| 4 | Culture Amp | 3 |
| 5 | Deputy | 2 |
| 6 | Immutable | 1 |

## Newest roles

| Role | Company | Location | Field |
| --- | --- | --- | --- |
| [Backend Engineer - Engine](https://job-boards.greenhouse.io/easygo/jobs/5208919007) | Easygo | Melbourne, Victoria, Australia | Cloud & DevOps |
| [Staff AI Application Security Engineer](https://jobs.ashbyhq.com/relevanceai/800c3d0b-865a-4169-b792-e3127b5a2c30) | Relevance AI | Sydney, Australia | Cyber Security |
| [Staff AI Platform Engineer](https://jobs.ashbyhq.com/relevanceai/cfc7da1e-7e0a-488a-a39c-26536baeefba) | Relevance AI | Sydney, Australia | Cloud & DevOps |
| [Engineering Manager, AI](https://jobs.ashbyhq.com/relevanceai/4fca67c5-d41e-4bef-946d-9cc0a74aaf2c) | Relevance AI | Sydney, Australia | Other Tech |
| [Senior AI Product Engineer](https://jobs.ashbyhq.com/relevanceai/ddc1b147-ecfc-4389-a1aa-fbdfb11a2cb6) | Relevance AI | Sydney, Australia | Other Tech |
| [Staff AI Product Engineer](https://jobs.ashbyhq.com/relevanceai/48ce82ea-0772-4e51-a979-eb56c32ca019) | Relevance AI | Sydney, Australia | Other Tech |
| [Senior Frontend Engineer - KICK Video/Ads](https://job-boards.greenhouse.io/easygo/jobs/5202608007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Platform Engineer](https://jobs.lever.co/immutable/fcd9fcb4-e568-4a40-a67e-fd57442171de) | Immutable | Sydney | Data Engineering |
| [Senior Data Analyst - Kick (Modelling)](https://job-boards.greenhouse.io/easygo/jobs/5097649007) | Easygo | Melbourne, Australia | Data Engineering |
| [Technical Support Engineer - Tier 3](https://jobs.lever.co/deputy/f22f8969-4a6d-44cc-95fb-a2f205264a10) | Deputy | Sydney | Other Tech |
| [Senior Backend Engineer - Engine](https://job-boards.greenhouse.io/easygo/jobs/5191644007) | Easygo | Melbourne, Australia | Cloud & DevOps |
| [Software Engineering Manager](https://job-boards.greenhouse.io/easygo/jobs/5152558007) | Easygo | Melbourne | Other Tech |
| [Sr Incident Response Engineer](https://job-boards.greenhouse.io/thetradedesk/jobs/5189449007) | The Trade Desk | Sydney | Cyber Security |
| [Senior Frontend Engineer, Design Systems](https://jobs.lever.co/deputy/41506091-6b34-4bac-977c-c0ae7d342e1f) | Deputy | Sydney | Software Engineering |
| [Senior Software Engineer - Engagement](https://job-boards.greenhouse.io/easygo/jobs/5123541007) | Easygo | Melbourne, Australia | Software Engineering |

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

## Pipeline

```mermaid
flowchart LR
    A[Cron: every 3 hours] --> B[Typecheck + tests]
    B -->|gate| C[Fetch job feeds]
    C --> C1[Greenhouse]
    C --> C2[Lever]
    C --> C3[Ashby]
    C1 --> D[Normalise to common schema]
    C2 --> D
    C3 --> D
    D --> E[Filter: Australia or remote-AU]
    E --> F[Categorise by field]
    F --> G[Diff against previous snapshot]
    G --> H[(timeseries.csv)]
    G --> I[(latest.json)]
    G --> J[(changes.md)]
    H --> K[Render README]
    I --> K
    K --> L[Commit back to repo]
```

Design notes, for anyone reading this as an engineering sample:

- **Every run is gated by CI.** `npm run typecheck` and `npm test` both have to
  pass before any collection happens, so a broken parser can never write a bad
  measurement into the history.
- **Runs are serialised.** A concurrency group prevents two scheduled runs from
  overlapping and double-committing the same window.
- **The history is append-only.** Each run adds one row to the time series rather
  than rewriting it, so the trend line is a real record and not a recomputation.
- **The README is generated, not hand-edited.** This file is rendered from
  `src/dashboard.ts` on every run, which is why the numbers above are never stale.
- **Failure is visible.** A ten-minute timeout and a scoped write permission mean
  a hung or misbehaving run fails loudly instead of silently skipping.

Built with TypeScript on Node 20, no runtime dependencies beyond the standard
toolchain, and no database: the repository itself is the datastore.

## Run it yourself

```bash
git clone https://github.com/Vikrant892/au-tech-pulse.git
cd au-tech-pulse
npm ci
npm run typecheck && npm test
npm run pulse          # writes data/ and regenerates this README
```

## Why this exists

Job boards show you a slice of a single day. A time series shows you where the
market is moving: which fields are growing, which companies are scaling, and how
much of the work is open to remote applicants. South Australian employers mostly
hire through systems without public feeds, so the local-only count runs lean and
the real opportunity for an Adelaide engineer is the remote-Australia market.
This repository keeps that record in the open.

## Licence

MIT. The collected data is public information; the code is free to reuse.
