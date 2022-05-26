import Head from "next/head";

import DisplayCard from "../src/components/Cards/DisplayCard";
import DesktopLargeDivider from "../src/components/Dividers/DesktopLargeDivider";
import BigDivider from "../src/components/Dividers/BigDivider";
import styles from "../styles/Home.module.css";

import uiMissionDisplay from "../public/uiMissionDisplay.jpeg";
import gitBudsDisplay from "../public/gitBudsDisplay.jpeg";
import splashImage from '../public/splashImage.jpeg';

// components

export default function Playground() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Playground of side projects - Om Nagarkar - Product Designer</title>

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />

        {/* Open Graph */}
        <meta property="og:url" content="omnextport.vercel.app/playground" key="ogurl" />
        <meta property="og:image" content={splashImage} key="ogimage" />
        <meta
          property="og:site_name"
          content="Playground portfolio of Om Nagarkar - Product Designer"
          key="ogsitename"
        />
        <meta
          property="og:title"
          content="Playground page of Om Nagarkar's Portfolio"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Playground page of Om Nagarkar, product designer based in Dallas, TX"
          key="ogdesc"
        />
      </Head>

      <DesktopLargeDivider />

      <div className={styles.sectionRows}>
        <DisplayCard
          imageSrc={uiMissionDisplay}
          alt={
            "A react.js app that I built which allows you to randomize UI design prompts for junior designers"
          }
          title={"UI Mission"}
          description={
            "Randomized UI prompts that try to help designers stay in constraints working with other systems. Built with React."
          }
          cta={"View live site"}
          link={"https://www.uimission.com"}
          targetBlank={"_blank"}
        />
        <DisplayCard
          imageSrc={gitBudsDisplay}
          alt={
            "An article about the things I want to achieve early in my career"
          }
          title={"GitBuds"}
          description={
            "Search the people you know and admire to check out their GitHub profile in an aesthetic way. Built with React."
          }
          cta={"View live site"}
          link={"https://gitbuds.netlify.app/"}
          targetBlank={"_blank"}
        />
      </div>

      <BigDivider />
    </div>
  );
}
