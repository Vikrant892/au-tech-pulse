# Australia Tech Pulse

An open, auto-updating snapshot of the Australian technology job market, with a
focus on roles an Adelaide-based engineer can take: jobs located in Adelaide or
open to remote applicants across Australia. The data is collected automatically
from public company hiring feeds several times a day and committed straight back
to this repository, so the numbers below track the live market without anyone
touching a keyboard.

**Last updated:** Tue, 25 Aug 2026, 01:19 am (Adelaide time) · run #60

## Right now

| Metric | Count |
| --- | --- |
| Open tech roles tracked | **34** |
| Located in Adelaide or South Australia | **0** |
| Open to remote within Australia | **2** |
| Companies hiring | **7** |

## By field

```
Data Engineering            2  ####........................
Machine Learning & AI       4  ########....................
Cyber Security              2  ####........................
Software Engineering       14  ############################
Cloud & DevOps              5  ##########..................
Other Tech                  7  ##############..............
```

## Trend

Open roles tracked across the last 60 runs:

<svg width="720" height="120" viewBox="0 0 720 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Open roles over time">
  <polyline fill="none" stroke="#22d3ee" stroke-width="2" points="8.0,112.0 19.9,112.0 31.9,112.0 43.8,112.0 55.7,112.0 67.7,112.0 79.6,112.0 91.5,112.0 103.5,91.2 115.4,91.2 127.3,91.2 139.3,91.2 151.2,91.2 163.1,91.2 175.1,91.2 187.0,91.2 198.9,70.4 210.8,70.4 222.8,49.6 234.7,49.6 246.6,49.6 258.6,49.6 270.5,70.4 282.4,70.4 294.4,49.6 306.3,28.8 318.2,28.8 330.2,28.8 342.1,28.8 354.0,28.8 366.0,8.0 377.9,8.0 389.8,8.0 401.8,8.0 413.7,8.0 425.6,8.0 437.6,8.0 449.5,8.0 461.4,8.0 473.4,8.0 485.3,8.0 497.2,8.0 509.2,8.0 521.1,8.0 533.0,8.0 544.9,8.0 556.9,8.0 568.8,8.0 580.7,8.0 592.7,8.0 604.6,28.8 616.5,28.8 628.5,28.8 640.4,28.8 652.3,28.8 664.3,28.8 676.2,28.8 688.1,28.8 700.1,28.8 712.0,28.8" />
  <circle cx="712.0" cy="28.8" r="3.5" fill="#22d3ee" />
</svg>

## Companies hiring the most

| # | Company | Open tech roles |
| --- | --- | --- |
| 1 | Easygo | 13 |
| 2 | Culture Amp | 6 |
| 3 | Relevance AI | 5 |
| 4 | The Trade Desk | 5 |
| 5 | Deputy | 3 |
| 6 | Immutable | 1 |
| 7 | Octopus Deploy | 1 |

## Newest roles

| Role | Company | Location | Field |
| --- | --- | --- | --- |
| [Identity & Access Management Engineer](https://job-boards.greenhouse.io/cultureamp/jobs/8152197) | Culture Amp | Melbourne | Other Tech |
| [Salesforce Developer](https://job-boards.greenhouse.io/cultureamp/jobs/8146369) | Culture Amp | Melbourne | Software Engineering |
| [Senior Software Engineer (Front end) - Payments (Crypto & Fiat)](https://job-boards.greenhouse.io/easygo/jobs/5215742007) | Easygo | Melbourne, Australia | Software Engineering |
| [Lead Software Engineer, AI Scheduling](https://jobs.lever.co/deputy/74a2c646-2eb9-4f05-9241-5b09bd20f6d5) | Deputy | Sydney | Software Engineering |
| [Senior Software Engineer (Data & Distributed Systems)](https://job-boards.greenhouse.io/thetradedesk/jobs/5215959007) | The Trade Desk | Sydney | Software Engineering |
| [Staff Platform Engineer](https://job-boards.greenhouse.io/cultureamp/jobs/8104820) | Culture Amp | Melbourne | Cloud & DevOps |
| [Senior Data Engineer](https://job-boards.anz.greenhouse.io/octopusdeploy/jobs/4005762201) | Octopus Deploy | Australia/New Zealand | Data Engineering |
| [Senior Frontend Engineer - KICK Creator Tools & Engagement](https://job-boards.greenhouse.io/easygo/jobs/5000593007) | Easygo | Melbourne, Australia | Software Engineering |
| [Backend Engineer - Engine](https://job-boards.greenhouse.io/easygo/jobs/5208919007) | Easygo | Melbourne, Victoria, Australia | Cloud & DevOps |
| [Staff AI Application Security Engineer](https://jobs.ashbyhq.com/relevanceai/800c3d0b-865a-4169-b792-e3127b5a2c30) | Relevance AI | Sydney, Australia | Cyber Security |
| [Staff AI Platform Engineer](https://jobs.ashbyhq.com/relevanceai/cfc7da1e-7e0a-488a-a39c-26536baeefba) | Relevance AI | Sydney, Australia | Cloud & DevOps |
| [Senior AI Product Engineer](https://jobs.ashbyhq.com/relevanceai/ddc1b147-ecfc-4389-a1aa-fbdfb11a2cb6) | Relevance AI | Sydney, Australia | Other Tech |
| [Staff AI Product Engineer](https://jobs.ashbyhq.com/relevanceai/48ce82ea-0772-4e51-a979-eb56c32ca019) | Relevance AI | Sydney, Australia | Other Tech |
| [Senior Frontend Engineer - KICK Video/Ads](https://job-boards.greenhouse.io/easygo/jobs/5202608007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Platform Engineer](https://jobs.lever.co/immutable/fcd9fcb4-e568-4a40-a67e-fd57442171de) | Immutable | Sydney | Data Engineering |

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
