// import Head from 'next/head'
import DisplayCard from '../src/components/Cards/DisplayCard';
import DesktopLargeDivider from '../src/components/Dividers/DesktopLargeDivider';
import BigDivider from '../src/components/Dividers/BigDivider';
import styles from '../styles/Home.module.css';

import uiMissionDisplay from '../public/uiMissionDisplay.jpeg';
import gitBudsDisplay from '../public/gitBudsDisplay.jpeg';

// components

export default function Playground() {
  return (
    <div className={styles.container}>

      <DesktopLargeDivider />

      <div className={styles.sectionRows}>
        <DisplayCard
          imageSrc={uiMissionDisplay}
          alt={"A react.js app that I built which allows you to randomize UI design prompts for junior designers"}
          title={"UI Mission"}
          description={"Randomized UI prompts that try to help designers stay in constraints working with other systems. Built with React."}
          cta={"View live site"}
          link={'https://www.uimission.com'}
          targetBlank={"_blank"}
        />
        <DisplayCard
          imageSrc={gitBudsDisplay}
          alt={"An article about the things I want to achieve early in my career"}
          title={"GitBuds"}
          description={"Search the people you know and admire to check out their GitHub profile in an aesthetic way. Built with React."}
          cta={"View live site"}
          link={'https://gitbuds.netlify.app/'}
          targetBlank={"_blank"}
        />
      </div>

      <BigDivider />

    </div>
  )
}
