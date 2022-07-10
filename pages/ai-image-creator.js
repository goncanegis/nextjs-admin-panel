import Head from 'next/head';
import Layout from '../components/Layout';

export default function AIImageCreator() {
  return (
    <>
      <Head>
        <title>NextJS Admin Panel 🖤</title>
      </Head>

      <section className="p-3">
        <h1>AI Image Creator</h1>
      </section>
    </>
  );
}

AIImageCreator.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
