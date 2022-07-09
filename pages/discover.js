import Head from 'next/head';
import Layout from '../components/layout';

export default function Discover() {
  return (
    <>
      <Head>
        <title>NextJS Admin Panel 🖤</title>
      </Head>

      <section className="p-3">
        <h1>Discover More</h1>
      </section>
    </>
  );
}

Discover.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
