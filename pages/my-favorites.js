import Head from 'next/head';
import Layout from '../components/Layout';

export default function MyFavorites() {
  return (
    <>
      <Head>
        <title>NextJS Admin Panel 🖤</title>
      </Head>

      <section className="p-3">
        <h1>My Favorites</h1>
      </section>
    </>
  );
}

MyFavorites.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
