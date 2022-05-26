// import Head from 'next/head'
import style from "../../styles/Home.module.css";
import styles from '../../styles/CaseStudy.module.css';

import Image from "next/image";

import giveDisplay from "../../public/giveDisplay.jpeg";

import BigDivider from "../../src/components/Dividers/BigDivider";
import MobileLargeDivider from "../../src/components/Dividers/MobileLargeDivider";
import LargeButton from "../../src/components/Buttons/LargeButton";

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

      <div className={styles.headerImage}>

        <Image src={giveDisplay} alt={"Display Image showing a mobile UI screen for Givelify's apps"} height="1600" width="2800" layout="responsive" objectFit="cover"/>

      </div>

      {/* This is the start of the case study content */}

      <MobileLargeDivider />

      <div className={styles.sectionSplit}>

        <h2>Intersecting checkouts and heartwarming experiences</h2>

        <p>Retro bitters wayfarers vaporware. Locavore pop-up asymmetrical truffaut hella sustainable normcore, aesthetic tote bag skateboard hell of actually. <br/> <br/> Woke YOLO you probably have not heard of them, authentic typewriter shabby chic disrupt gentrify lo-fi echo park retro vinyl blue bottle. Cardigan snackwave single-origin coffee mumblecore ennui prism af hell of. Retro shabby chic literally, four loko praxis art party pickled. <br/> <br/> Adaptogen craft beer kitsch tonx polaroid migas cray typewriter tumblr locavore air plant normcore.</p>

      </div>

      <LargeButton srcTo={'/work/jham'} buttonCopy={'View next project (Jham)'}/>
    

    <BigDivider />
    <BigDivider />
    <BigDivider />
    

    </div>
  );
}
