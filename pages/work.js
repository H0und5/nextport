// import Head from 'next/head'
import styles from '../styles/Home.module.css';

// assets
import giveDisplay from '../public/giveDisplay.jpeg';
import jhamDisplay from '../public/jhamDisplay.jpeg';
import typeDisplay from '../public/typographitDisplay.jpg';

// components
import CaseCard from '../src/components/Cards/CaseCard';


// mapping over Case Card, creating a object 

export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.headerDivider}></div>

      <CaseCard 
        imageSrc={giveDisplay}
        imageAlt={"This is the display image for the Givelify Case Study, which takes you to the project overview."}
        title={"Designing a magical donation experience"}
        year={"2021-2022"}  
        linkSource={"/work/givelify"}
      />

      <CaseCard 
        imageSrc={jhamDisplay}
        imageAlt={"This is the display image for the Jham Case Study, which takes you to the project overview."}
        title={"Building a convenient IT helpdesk experience"}
        year={"2020-2021"}  
        linkSource={"/work/jham"}
      />

      <CaseCard 
        imageSrc={typeDisplay}
        imageAlt={"This is the display image for the Typographit Case Study, which takes you to the project overview."}
        title={"Concepting a font management system"}
        year={"2020-2021"}  
        linkSource={"/work/typographit"}
      />

      <CaseCard 
        imageSrc={jhamDisplay}
        imageAlt={"This is the display image for the Clubhouse Redesign Case Study, which takes you to the project overview."}
        title={"Reimagining the Clubhouse experience"}
        year={"2020-2021"}  
        linkSource={"/work/clubhouse"}
      />


    </div>
  )
}
