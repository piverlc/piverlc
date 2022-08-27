import * as React from "react";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout, { siteTitle } from "../../components/layout";
import { Posts } from "../../types/types";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

interface PostProps {
  postData: Posts;
}

const Post = ({ postData }: PostProps) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Post;

export async function getStaticPaths({ params }: { params: { id: string } }) {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: {
    id: string;
    contentHtml: string;
  };
}) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
