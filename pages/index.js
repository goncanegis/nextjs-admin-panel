import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS App</title>
      </Head>

      <section className="p-3">
        <h2>NextJS Admin Panel</h2>
        <p>This is a sample app built with Next.js.</p>
        <p className="mb-2">
          Nested layout was used to achieve state persistence at page
          navigation, and the fast SPA experience.
        </p>
        <p className="mb-4">
          Bootstrap and custom CSS was used to style the app.
        </p>
        <h3>Try It Out</h3>
        <p>Check the AI Text Editor!</p>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
