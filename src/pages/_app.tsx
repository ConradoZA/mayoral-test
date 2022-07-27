import './globals.css';

import Meta from 'components/Meta';
import { AppProps } from 'next/app';

function MayoralApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  );
}

export default MayoralApp;
