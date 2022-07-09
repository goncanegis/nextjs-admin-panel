import Head from 'next/head';
import Layout from '../../components/Layout';
import NestedLayout from '../../components/NestedLayout';
import styles from '../../styles/ai-writer.module.css';

export default function AIWriter() {
  return (
    <>
      <Head>
        <title>NextJS Admin Panel 🖤</title>
      </Head>

      <section className={`m-3 mt-0 p-3 ${styles.mainSection}`}>
        <div className="d-flex">
          <h1>TODO: Redirect to posts page</h1>
        </div>
      </section>
    </>
  );
}

AIWriter.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
