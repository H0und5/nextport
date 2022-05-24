// import Head from 'next/head'
import style from "../../styles/Home.module.css";
import styles from '../../styles/CaseStudy.module.css';

import CaseCard from "../../src/components/Cards/CaseCard";

import giveDisplay from "../../public/giveDisplay.jpeg";
import Image from "next/image";
import SmallDivider from "../../src/components/Dividers/SmallDivider";
import BigDivider from "../../src/components/Dividers/BigDivider";

// components

export default function Givelify() {
  return (
    <div className={style.container}>

      <div className={styles.headingOverview}>

        <div className={styles.heading}>

          <h1>Designing a magical donation experience</h1>

          <h6 className={styles.caps}>Givelify, 2021-Present</h6>

          <p>How I designed a font management system by picking up on user frustrations across other similar apps and aggregating each of their best capabilities into one platform.</p>

        </div>

      </div>
      


    </div>
  );
}
