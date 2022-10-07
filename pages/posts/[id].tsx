import { FC } from "react";
import Head from "next/head";
import Layout from "../../common/uiLayout";
import DateWrapper from "../../components/date/DateWrapper";
import { Posts } from "../../types/types";
import { getAllPostIds, getPostData } from "../../lib";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticPaths, GetStaticProps } from "next";

type PostProps = {
  postData: Posts;
};

const Post: FC<PostProps> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <DateWrapper dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params!.id as string);
  return {
    props: {
      postData,
    },
  };
};
