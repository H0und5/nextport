// import Head from 'next/head'
import styles from "../../styles/Home.module.css";

import CaseCard from "../../src/components/Cards/CaseCard";

import giveDisplay from "../../public/giveDisplay.jpeg";
import Image from "next/image";
import SmallDivider from "../../src/components/Dividers/SmallDivider";
import BigDivider from "../../src/components/Dividers/BigDivider";

// components

export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.headerDivider}></div>

      <BigDivider />
      
      <Image src={giveDisplay} alt="example image" />
      
      <div className={styles.headerDivider}></div>


    </div>
  );
}
