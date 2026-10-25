# Australia Tech Pulse

An open, auto-updating snapshot of the Australian technology job market, with a
focus on roles an Adelaide-based engineer can take: jobs located in Adelaide or
open to remote applicants across Australia. The data is collected automatically
from public company hiring feeds several times a day and committed straight back
to this repository, so the numbers below track the live market without anyone
touching a keyboard.

**Last updated:** Mon, 26 Oct 2026, 09:39 am (Adelaide time) · run #762

## Right now

| Metric | Count |
| --- | --- |
| Open tech roles tracked | **16** |
| Located in Adelaide or South Australia | **0** |
| Open to remote within Australia | **1** |
| Companies hiring | **7** |

## By field

```
Data Engineering            1  #####.......................
Machine Learning & AI       0  ............................
Cyber Security              2  #########...................
Software Engineering        6  ############################
Cloud & DevOps              3  ##############..............
Other Tech                  4  ###################.........
```

## Trend

Open roles tracked across the last 40 runs, oldest on the left. Now 16.

```
20 │█████████████
   │██████████████
   │██████████████
   │█████████████████
   │█████████████████     ██  ██████████████
15 │████████████████████████████████████████
   └────────────────────────────────────────
```

## Companies hiring the most

| # | Company | Open tech roles |
| --- | --- | --- |
| 1 | Easygo | 5 |
| 2 | Deputy | 3 |
| 3 | Immutable | 3 |
| 4 | Culture Amp | 2 |
| 5 | Bugcrowd | 1 |
| 6 | Relevance AI | 1 |
| 7 | The Trade Desk | 1 |

## Newest roles

| Role | Company | Location | Field |
| --- | --- | --- | --- |
| [Senior Security Engineer (Product Security)](https://jobs.lever.co/immutable/80353766-d815-497e-bf5f-17594677fcd9) | Immutable | Sydney | Cyber Security |
| [Senior Software Engineer (React-Native, Mobile)](https://job-boards.greenhouse.io/easygo/jobs/5270767007) | Easygo | Melbourne, Victoria | Software Engineering |
| [Product Security Engineer](https://boards.greenhouse.io/bugcrowd/jobs/8202018?gh_jid=8202018) | Bugcrowd | Remote - Costa Rica | Cyber Security |
| [Senior AI Platform Engineer](https://jobs.ashbyhq.com/relevanceai/cfc7da1e-7e0a-488a-a39c-26536baeefba) | Relevance AI | Sydney, Australia | Cloud & DevOps |
| [Senior Software Engineer, AI Scheduling](https://jobs.lever.co/deputy/3b74806c-695c-492f-a0ef-ea332dc8bb41) | Deputy | Sydney | Software Engineering |
| [Software Engineer](https://jobs.lever.co/immutable/0279e748-a186-4254-bf9b-349edcc850b8) | Immutable | Sydney | Software Engineering |
| [Software Engineer - 12 Month Fixed Term Contract](https://jobs.lever.co/deputy/b2e9023a-e9f1-4a54-9f01-17c13290b4b8) | Deputy | Sydney | Software Engineering |
| [Senior Backend Engineer - Engine](https://job-boards.greenhouse.io/easygo/jobs/5191644007) | Easygo | Melbourne, Australia | Cloud & DevOps |
| [Senior Systems Engineer](https://job-boards.greenhouse.io/cultureamp/jobs/8229754) | Culture Amp | Melbourne | Other Tech |
| [Software Engineering Manager - Wallet Tribe (Crypto & Fiat)](https://job-boards.greenhouse.io/easygo/jobs/5194200007) | Easygo | Melbourne | Other Tech |
| [Staff Engineer](https://job-boards.greenhouse.io/cultureamp/jobs/8220056) | Culture Amp | Melbourne | Other Tech |
| [Senior Software Engineer - Engagement](https://job-boards.greenhouse.io/easygo/jobs/5123541007) | Easygo | Melbourne, Australia | Software Engineering |
| [Staff Software Engineer, (Full-Stack) - Engagement team](https://job-boards.greenhouse.io/easygo/jobs/5103198007) | Easygo | Melbourne, Australia | Software Engineering |
| [Senior Platform Engineer](https://jobs.lever.co/immutable/fcd9fcb4-e568-4a40-a67e-fd57442171de) | Immutable | Sydney | Data Engineering |
| [Technical Support Engineer - Tier 3](https://jobs.lever.co/deputy/f22f8969-4a6d-44cc-95fb-a2f205264a10) | Deputy | Sydney | Other Tech |

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
