import Head from 'next/head';
import Layout from '../../components/Layout';
import NestedLayout from '../../components/NestedLayout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AIWriter() {
  const router = useRouter();

  useEffect(() => {
    router.push('/ai-writer/posts');
  }, []);

  return (
    <>
      <Head>
        <title>NextJS Admin Panel 🖤</title>
      </Head>
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
