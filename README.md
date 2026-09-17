# Australia Tech Pulse

An open, auto-updating snapshot of the Australian technology job market, with a
focus on roles an Adelaide-based engineer can take: jobs located in Adelaide or
open to remote applicants across Australia. The data is collected automatically
from public company hiring feeds several times a day and committed straight back
to this repository, so the numbers below track the live market without anyone
touching a keyboard.

**Last updated:** Fri, 18 Sept 2026, 06:45 am (Adelaide time) · run #611

## Right now

| Metric | Count |
| --- | --- |
| Open tech roles tracked | **37** |
| Located in Adelaide or South Australia | **0** |
| Open to remote within Australia | **2** |
| Companies hiring | **9** |

## By field

```
Data Engineering            4  #######.....................
Machine Learning & AI       4  #######.....................
Cyber Security              3  #####.......................
Software Engineering       16  ############################
Cloud & DevOps              5  #########...................
Other Tech                  5  #########...................
```

## Trend

Open roles tracked across the last 40 runs, oldest on the left. Now 37.

```
38 │█████████████████████████ ██         ███
   │█████████████████████████ ██████████████
   │█████████████████████████ ██████████████
   │█████████████████████████ ██████████████
   │█████████████████████████ ██████████████
23 │████████████████████████████████████████
   └────────────────────────────────────────
```

## Companies hiring the most

| # | Company | Open tech roles |
| --- | --- | --- |
| 1 | Easygo | 15 |
| 2 | Culture Amp | 7 |
| 3 | Deputy | 4 |
| 4 | Relevance AI | 4 |
| 5 | Immutable | 2 |
| 6 | The Trade Desk | 2 |
| 7 | Brighte | 1 |
| 8 | Bugcrowd | 1 |
| 9 | Octopus Deploy | 1 |

## Newest roles

| Role | Company | Location | Field |
| --- | --- | --- | --- |
| [Senior Software Engineer (Backend)](https://job-boards.greenhouse.io/easygo/jobs/5239580007) | Easygo | Melbourne, Victoria | Software Engineering |
| [Lead QA Engineer (12 month contract)](https://jobs.lever.co/deputy/94860757-3fc3-4206-9e00-a5ccf6d8a374) | Deputy | Sydney | Other Tech |
| [Backend Engineer - Engine](https://job-boards.greenhouse.io/easygo/jobs/5208919007) | Easygo | Melbourne, Victoria, Australia | Cloud & DevOps |
| [Senior Backend Engineer - Engine](https://job-boards.greenhouse.io/easygo/jobs/5191644007) | Easygo | Melbourne, Australia | Cloud & DevOps |
| [Senior Backend Engineer - KICK Platform Trust](https://job-boards.greenhouse.io/easygo/jobs/5146144007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Data Analyst - Kick](https://job-boards.greenhouse.io/easygo/jobs/5097649007) | Easygo | Melbourne, Australia | Data Engineering |
| [Senior Frontend Engineer - KICK Creator Tools & Engagement](https://job-boards.greenhouse.io/easygo/jobs/5000593007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Frontend Engineer - KICK Video/Ads](https://job-boards.greenhouse.io/easygo/jobs/5202608007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Software Engineer - Engagement](https://job-boards.greenhouse.io/easygo/jobs/5123541007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Software Engineer - KICK Discovery & Presence](https://job-boards.greenhouse.io/easygo/jobs/5117022007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Software Engineer - Onboarding](https://job-boards.greenhouse.io/easygo/jobs/4991302007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Software Engineer - Onboarding](https://job-boards.greenhouse.io/easygo/jobs/5186155007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Software Engineer (Front end) - Payments (Crypto & Fiat)](https://job-boards.greenhouse.io/easygo/jobs/5215742007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Software Engineer, Full-Stack (Sydney)](https://job-boards.greenhouse.io/easygo/jobs/5230837007) | Easygo | Sydney, Australia | Software Engineering |
| [Staff Backend Software Engineer](https://job-boards.greenhouse.io/easygo/jobs/5153906007) | Easygo | Melbourne, Australia | Software Engineering |

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
