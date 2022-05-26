// import Head from 'next/head'
import WritingHeader from "../../src/components/Header/WritingHeader";
import LargeButton from '../../src/components/Buttons/LargeButton';

import Image from "next/image";

import style from "../../styles/Home.module.css";
import styles from "../../styles/Writings.module.css";

import whatIWantToAchieveEarlyDisplay from "../../public/WhatIWantToAchieveEarlyDisplay.jpeg";
import BigDivider from "../../src/components/Dividers/BigDivider";


// components

export default function WhatIWantToAchieve() {
  return (
    <div className={style.container}>
      <div className={styles.writingHeadingContainer}>
        <WritingHeader title={"What I want to achieve early"} />

        <Image
          src={whatIWantToAchieveEarlyDisplay}
          alt={"display image for the manifesto article"}
        />
      </div>

      <div className={styles.writingContent}>
        <p>
          Every now and then I notice feats of great talent and skill, whether
          it be from those I know well to those I don’t. The appreciation of
          such works fuels my passion to reach similar standards of excellence.

          <br/><br/>
          I have had the privilege of working with and learning from an
          incredible network of professionals so dedicated to their crafts with
          such humility, I find that it compels me to elevate the standards I
          hold myself to. 
          
          <br/><br/>
          
          It is of great importance for me to sharpen my skills
          and broaden my talents in the effort that I can improve myself and in
          the same breath, deliver a level of quality that others can be proud
          of for me. 
          
          <br/><br/>
          
          I believe that to aim for excellence in the face of great
          challenges and opportunities, is the mark of a designer.
        </p>
      </div>

      <LargeButton srcTo={'manifesto'} buttonCopy={'Read next article'}/>

      <BigDivider />

    </div>
  )
}
