import Head from 'next/head';
import Layout from '../../components/Layout';
import NestedLayout from '../../components/NestedLayout';
import styles from '../../styles/ai-writer.module.css';

export default function History() {
  return (
    <>
      <Head>
        <title>NextJS Admin Panel 🖤</title>
      </Head>

      <section className={`m-3 mt-0 p-3 ${styles.mainSection}`}>
        <div className="d-flex">
          <div>HISTORY</div>
        </div>
      </section>
    </>
  );
}

History.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
