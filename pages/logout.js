import Head from 'next/head';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);

  return (
    <>
      <Head>
        <title>NextJS Admin Panel 🖤</title>
      </Head>

      <section className="p-3">
        <h1>Logging out, see you!</h1>
      </section>
    </>
  );
}

Logout.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
