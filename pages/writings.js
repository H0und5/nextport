// import Head from 'next/head'
import styles from "../styles/Home.module.css";

import DesktopLargeDivider from "../src/components/Dividers/DesktopLargeDivider";
import BigDivider from "../src/components/Dividers/BigDivider";
import DisplayCard from "../src/components/Cards/DisplayCard";

import Head from "next/head";

import manifestoDisplay from '../public/ManifestoDisplay.jpeg';
import whatIWantToAchieveEarlyDisplay from '../public/WhatIWantToAchieveEarlyDisplay.jpeg'

import splashImage from '../public/splashImage.jpeg';

// components

export default function Writings() {
  return (
    <div>

<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Writings - Om Nagarkar - Product Designer</title>

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />

        {/* Open Graph */}
        <meta property="og:url" content="omnextport.vercel.app/playground" key="ogurl" />
        <meta property="og:image" content={splashImage} key="ogimage" />
        <meta
          property="og:site_name"
          content="Writings of Om Nagarkar - Product Designer"
          key="ogsitename"
        />
        <meta
          property="og:title"
          content="Writings page of Om Nagarkar's Portfolio"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Writings page of Om Nagarkar, product designer based in Dallas, TX"
          key="ogdesc"
        />
      </Head>

      <DesktopLargeDivider />

      <div className={styles.sectionRows}>
        <DisplayCard
          imageSrc={manifestoDisplay}
          alt={"This is an article about my manifesto and the things I'm grateful for."}
          title={"Manifesto"}
          description={"An article about my thoughts when aiming to improve my self and craft."}
          cta={"Read article"}
          link={'/writings/manifesto'}
        />
        <DisplayCard
          imageSrc={whatIWantToAchieveEarlyDisplay}
          alt={"An article about the things I want to achieve early in my career"}
          title={"What I want to achieve early in my career"}
          description={"A written goal for what I’ll be aiming for over these next few years."}
          cta={"Read article"}
          link={'/writings/what-I-want-to-achieve-early'}
        />
      </div>

      <BigDivider />
    </div>
  );
}
