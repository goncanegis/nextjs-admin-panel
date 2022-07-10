import Head from 'next/head';
import Layout from '../components/Layout';

export default function ColorAnalysis() {
  return (
    <>
      <Head>
        <title>NextJS Admin Panel 🖤</title>
      </Head>

      <section className="p-3">
        <h1>Color Analysis</h1>
      </section>
    </>
  );
}

ColorAnalysis.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
