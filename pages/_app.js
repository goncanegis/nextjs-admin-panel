import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import Head from 'next/head';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return getLayout(
    <>
      <SSRProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}
