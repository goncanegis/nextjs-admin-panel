import Head from 'next/head';
import Layout from '../components/Layout';

export default function Pricing() {
  return (
    <>
      <Head>
        <title>NextJS Admin Panel 🖤</title>
      </Head>

      <section className="p-3">
        <h1>Pricing</h1>
      </section>
    </>
  );
}

Pricing.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
