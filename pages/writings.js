// import Head from 'next/head'
import styles from "../styles/Home.module.css";

import DesktopLargeDivider from "../src/components/Dividers/DesktopLargeDivider";
import BigDivider from "../src/components/Dividers/BigDivider";
import DisplayCard from "../src/components/Cards/DisplayCard";
import Footer from "../src/components/Footer/Footer";

import giveDisplay from "../public/giveDisplay.jpeg";

// components

export default function Writings() {
  return (
    <div>

      <DesktopLargeDivider />

      <div className={styles.sectionRows}>
        <DisplayCard
          imageSrc={giveDisplay}
          alt={"This is an article about my manifesto and the things I'm grateful for."}
          title={"Manifesto"}
          description={"An article about my thoughts when aiming to improve my self and craft."}
          cta={"Read article"}
          link={'/writings/Manifesto'}
        />
        <DisplayCard
          imageSrc={giveDisplay}
          alt={"An article about the things I want to achieve early in my career"}
          title={"What I want to achieve early in my career"}
          description={"A written goal for what I’ll be aiming for over these next few years."}
          cta={"Read article"}
          link={'/writings/what-I-want-to-achieve-early'}
        />
      </div>

      <BigDivider />

      <Footer />
    </div>
  );
}
