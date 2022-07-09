import Head from 'next/head';
import Layout from '../../../components/Layout';
import NestedLayout from '../../../components/NestedLayout';
import NestedLayoutPosts from '../../../components/NestedLayoutPosts';
import { useRouter } from 'next/router';
0;
import { getAllPostIds, getPostData } from '../../../lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>

      {postData.title}
      <br />

      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </>
  );
}

Post.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>
        <NestedLayoutPosts>{page}</NestedLayoutPosts>
      </NestedLayout>
    </Layout>
  );
};
