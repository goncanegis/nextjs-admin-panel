import Head from 'next/head';
import Layout from '../components/Layout';

export default function Trends() {
  return (
    <>
      <Head>
        <title>NextJS Admin Panel 🖤</title>
      </Head>

      <section className="p-3">
        <h1>Trends</h1>
      </section>
    </>
  );
}

Trends.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
