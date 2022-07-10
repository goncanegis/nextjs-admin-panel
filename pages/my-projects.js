import Head from 'next/head';
import Layout from '../components/Layout';

export default function MyProjects() {
  return (
    <>
      <Head>
        <title>NextJS Admin Panel 🖤</title>
      </Head>

      <section className="p-3">
        <h1>My Projects</h1>
      </section>
    </>
  );
}

MyProjects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
