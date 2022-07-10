import Head from 'next/head';
import Layout from '../components/Layout';

export default function NewProject() {
  return (
    <>
      <Head>
        <title>NextJS Admin Panel 🖤</title>
      </Head>

      <section className="p-3">
        <h1>New Project</h1>
      </section>
    </>
  );
}

NewProject.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
