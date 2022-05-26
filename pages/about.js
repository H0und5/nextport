import Head from 'next/head'
import AboutBio from '../src/components/AboutBio/AboutBio';
import styles from '../styles/Home.module.css';

import splashImage from '../public/splashImage.jpeg'

// components

export default function About() {
  return (
    <div className={styles.container}>

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>About - Om Nagarkar - Product Designer</title>

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />

        {/* Open Graph */}
        <meta property="og:url" content="omnextport.vercel.app/playground" key="ogurl" />
        <meta property="og:image" content={splashImage} key="ogimage" />
        <meta
          property="og:site_name"
          content="Portfolio of Om Nagarkar - Product Designer"
          key="ogsitename"
        />
        <meta
          property="og:title"
          content="About page of Om Nagarkar's Portfolio"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="About page of Om Nagarkar, product designer based in Dallas, TX"
          key="ogdesc"
        />
      </Head>

      <AboutBio />

    </div>
  )
}
