
import '@/styles/globals.scss';

import type { AppProps } from 'next/app';

import EmotionsBoardProvider, { rootStore } from '@/components/EmotionsProvider/EmotionsProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EmotionsBoardProvider value={rootStore}>
      <Component {...pageProps} />
    </EmotionsBoardProvider>
  );
}
