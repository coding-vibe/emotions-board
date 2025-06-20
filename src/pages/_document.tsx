import { Html, Head, Main, NextScript } from 'next/document';
import clsx from 'clsx';

export default function Document() {
  const getBackgroundClass = () => {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
      return 'body-morning';
    }
    if (hour >= 12 && hour < 18) {
      return 'body-day';
    }
    if (hour >= 18 || hour < 6) {
      return 'body-night';
    }
  };
  return (
    <Html lang="en">
      <Head />
      <body className={clsx('antialiased', getBackgroundClass())}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
