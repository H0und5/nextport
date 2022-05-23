// import Head from 'next/head'
import styles from "../../styles/Home.module.css";

import ImageCaseCover from "../../src/components/ImageCovers/ImageCaseCover";
import CaseCard from "../../src/components/Cards/CaseCard";

import giveDisplay from "../../public/giveDisplay.jpeg";

// components

export default function Home() {
  return (
    <div className={styles.container}>
      
      <ImageCaseCover imageSrc={giveDisplay} alt={"this is a start"}/>
      
      <div className={styles.headerDivider}></div>


    </div>
  );
}
