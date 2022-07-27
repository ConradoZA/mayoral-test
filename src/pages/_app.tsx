import './globals.css';

import Layout from '../components/Layout';
import { AppProps } from 'next/app';

function MayoralApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MayoralApp;
