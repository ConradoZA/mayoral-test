import './globals.css';

import Layout from '../components/Layout';

interface AppProps {
  Component: any;
  pageProps: any;
}

function MayoralApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MayoralApp;
