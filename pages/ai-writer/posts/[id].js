import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import NestedLayout from '../../../components/NestedLayout';
import NestedLayoutPosts from '../../../components/NestedLayoutPosts';
import { useRouter } from 'next/router';
0;
import { getAllPostIds, getPostData } from '../../../lib/posts';
import LeftIcon from '../../../public/images/icon/leftIcon.svg';
import Others from '../../../public/images/icon/others.svg';
import BoldIcon from '../../../public/images/icon/text-B.svg';
import ItalicIcon from '../../../public/images/icon/text-I.svg';
import UnderlineIcon from '../../../public/images/icon/text-U.svg';
import LeftAlignIcon from '../../../public/images/icon/paragraph-left.svg';
import CenterIcon from '../../../public/images/icon/paragraph-center.svg';
import RightAlignIcon from '../../../public/images/icon/paragraph-right.svg';

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

      <div className="single-post-header d-flex p-3 align-items-start justify-content-between">
        <div className="d-flex align-items-start">
          <Link href="/ai-writer/posts">
            <a>
              <LeftIcon
                color="white"
                height={13}
                width={18.33}
                className="me-2"
              />
            </a>
          </Link>
          <div className="d-flex p-1 align-items-center h-100">
            <h2>{postData.title}</h2>
          </div>
        </div>
        <div className="d-flex align-items-center h-100">
          <button className="btn p-0" aria-label="others">
            <Others fill="white" />
          </button>
        </div>
      </div>

      <div className="single-post-controls-container d-flex flex-wrap align-items-lg-center justify-content-lg-between p-3">
        <div className="single-post-controls">
          <BoldIcon className="me-2" />
          <ItalicIcon className="me-2" />
          <UnderlineIcon className="me-2" />
          <LeftAlignIcon className="me-2" />
          <CenterIcon className="me-2" />
          <RightAlignIcon className="me-2" />
          <BoldIcon className="me-2" />
          <ItalicIcon className="me-2" />
          <UnderlineIcon className="me-2" />
          <LeftAlignIcon className="me-2" />
          <CenterIcon className="me-2" />
          <RightAlignIcon className="me-2" />
          <BoldIcon className="me-2" />
          <ItalicIcon className="me-2" />
          <UnderlineIcon className="me-2" />
        </div>
        <div className="single-post-stats d-flex align-items-center">
          <div className="single-post-stat me-3">
            <p>Kelime: {postData.content.trim().split(/\s+/).length}</p>
          </div>
          <div className="single-post-stat">
            <p>Karakter: {postData.content.length}</p>
          </div>
        </div>
      </div>

      <div
        className="post-content mb-3"
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
