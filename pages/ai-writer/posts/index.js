import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import NestedLayout from '../../../components/NestedLayout';
import NestedLayoutPosts from '../../../components/NestedLayoutPosts';
import { getSortedPostsData } from '../../../lib/posts';
import AITextIcon from '../../../public/images/icon/aiTextIcon.svg';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Posts({ allPostsData }) {
  return (
    <>
      <Head>
        <title>NextJS Admin Panel 🖤</title>
      </Head>

      <div className="d-flex flex-column posts-header">
        <h1 className="ms-3 mt-3 text-white">AI Metin Yazarı Dosyalarım</h1>
        <p className="ms-3">Lorem Ipsum</p>
      </div>
      <div className="posts-content d-flex flex-column">
        {allPostsData.map(({ id, date, title }) => (
          <div
            className="post-title-container d-flex align-items-center py-3"
            key={id}
          >
            <Link href={`/ai-writer/posts/${id}`}>
              <a className="post-title">
                <AITextIcon color="white" className="ms-3 me-3" />
                {title}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

Posts.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>
        <NestedLayoutPosts>{page}</NestedLayoutPosts>
      </NestedLayout>
    </Layout>
  );
};
