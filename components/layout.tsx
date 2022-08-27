import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "John Doe";
export const siteTitle = `${name}'s personal blog`;

interface LayoutProps {
  children: React.ReactNode;
  home?: Boolean;
}

const Layout = ({ children, home }: LayoutProps) => (
  <div className={styles.container}>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Personal Blog" />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <header className={styles.header}>
      {home ? (
        <React.Fragment>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={150}
            width={150}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={150}
                width={150}
                alt={name}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h2>
        </React.Fragment>
      )}
    </header>
    <main>{children}</main>
    {!home && (
      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    )}
  </div>
);

export default Layout;
