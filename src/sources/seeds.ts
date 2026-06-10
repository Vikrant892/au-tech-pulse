// Companies whose public ATS feeds we poll. No API keys: these are the
// JSON endpoints the boards serve to their own careers widgets. Every
// token here was verified live; a token that later 404s is skipped at
// runtime, so a stale entry never breaks a run. `adelaide` marks firms
// with a South Australian office so their roles count locally even when
// a posting omits the city.
export type BoardKind = 'greenhouse' | 'lever' | 'workable' | 'ashby';

export interface Board {
  name: string;
  kind: BoardKind;
  token: string;
  adelaide?: boolean;
}

export const BOARDS: Board[] = [
  { name: 'Octopus Deploy', kind: 'greenhouse', token: 'octopusdeploy' },
  { name: 'DoorDash', kind: 'greenhouse', token: 'doordashaustralia' },
  { name: 'The Trade Desk', kind: 'greenhouse', token: 'thetradedesk' },
  { name: 'Bugcrowd', kind: 'greenhouse', token: 'bugcrowd' },
  { name: 'Culture Amp', kind: 'greenhouse', token: 'cultureamp' },
  { name: 'Easygo', kind: 'greenhouse', token: 'easygo' },
  { name: 'Immutable', kind: 'lever', token: 'immutable' },
  { name: 'Airtasker', kind: 'lever', token: 'airtasker' },
  { name: 'Brighte', kind: 'lever', token: 'brighte' },
  { name: 'Deputy', kind: 'lever', token: 'deputy' },
  { name: 'Relevance AI', kind: 'ashby', token: 'relevanceai' },
  { name: 'Vow', kind: 'ashby', token: 'vow' },
];
