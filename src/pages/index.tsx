import Head from 'next/head';

import Tabs from '@/components/Tabs';
import tabsList from '@/constants/tabsList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Emotions board</title>
      </Head>
      <Tabs tabsList={tabsList} />
    </>
  );
}
