import Head from 'next/head';
import Layout from '../../../components/Layout';

import styles from '../../../styles/ai-writer.module.css';
import { useRouter } from 'next/router';

import NestedLayoutPosts from '../../../components/NestedLayoutPosts';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>NextJS Admin Panel 🖤</title>
      </Head>

      <section className={`m-3 mt-0 p-3 ${styles.mainSection}`}>
        <div className="d-flex">
          <p>Post id: {id}</p>
        </div>
      </section>
    </>
  );
}

Post.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayoutPosts>{page}</NestedLayoutPosts>
    </Layout>
  );
};
