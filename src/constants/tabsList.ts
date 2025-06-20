export enum TabKey {
  BOARD = 'board',
  STATS = 'stats',
}
export interface TabType {
  eventKey: TabKey;
  title: string;
}

const tabsList: TabType[] = [
  { eventKey: TabKey.BOARD, title: 'Board' },
  { eventKey: TabKey.STATS, title: 'Statistics' },
];

export default tabsList;
