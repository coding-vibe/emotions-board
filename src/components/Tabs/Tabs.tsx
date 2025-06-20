import { Tabs as BootstrapTabs, Tab as BootstrapTab } from 'react-bootstrap';
import { TabKey, TabType } from '@/constants/tabsList';
import EmotionsBoard from '@/components/EmotionsBoard';
import Statistics from '@/components/Statistics';

interface Props {
  tabsList: TabType[];
}

export default function Tabs({ tabsList }: Props) {
  return (
    <BootstrapTabs defaultActiveKey={tabsList[0].eventKey} id="tabs" className="mb-3 fw-bold fs-5">
      {tabsList.map(({ eventKey, title }) => (
        <BootstrapTab key={eventKey} eventKey={eventKey} title={title}>
          {eventKey === TabKey.BOARD && <EmotionsBoard />}
          {eventKey === TabKey.STATS && <Statistics />}
        </BootstrapTab>
      ))}
    </BootstrapTabs>
  );
}
