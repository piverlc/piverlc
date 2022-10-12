import { FC, Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../common/uiLayout";
import DateWrapper from "../components/date/DateWrapper";
import { Posts } from "../types/types";
import { getSortedPostsData } from "../lib";
import utilStyles from "../styles/utils.module.css";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

type HomeProps = {
  allPostsData: Posts[];
};

const Home: FC<HomeProps> = ({ allPostsData }) => {
  return (
    <Fragment>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, title, date }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <DateWrapper dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </Fragment>
  );
};

export default Home;
