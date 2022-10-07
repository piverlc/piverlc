import { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AppLayout from "./AppLayout";
import styles from "./index.module.css";
import utilStyles from "../../styles/utils.module.css";

const name = "John Doe";
export const siteTitle = `${name}'s personal blog`;

type LayoutProps = {
  children: React.ReactNode;
  home?: Boolean;
};

const Layout: FC<LayoutProps> = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal Blog" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              layout="fixed"
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={244}
              width={244}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <AppLayout.Main>{children}</AppLayout.Main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>{"← Back to home"}</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
