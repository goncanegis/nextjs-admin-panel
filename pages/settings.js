import Head from 'next/head';
import Layout from '../components/Layout';

export default function Settings() {
  return (
    <>
      <Head>
        <title>NextJS Admin Panel 🖤</title>
      </Head>

      <section className="p-3">
        <h1>Settings</h1>
      </section>
    </>
  );
}

Settings.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
