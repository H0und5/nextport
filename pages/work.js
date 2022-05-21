// import Head from 'next/head'
import styles from '../styles/Home.module.css';

// assets
import giveDisplay from '../public/giveDisplay.jpeg';
import jhamDisplay from '../public/jhamDisplay.jpeg';

// components
import NavBar from '../src/components/NavBar';
import CaseCard from '../src/components/CaseCard';

export default function Home() {
  return (
    <div className={styles.container}>

      <NavBar work={true}/>

      <div className={styles.headerDivider}></div>

      <CaseCard 
        imageSrc={giveDisplay}
        imageAlt={"This is the display image for the Givelify Case Study, which takes you to the project overview."}
        title={"Designing a magical donation experience"}
        year={"2021-2022"}  
      />

      <CaseCard 
        imageSrc={jhamDisplay}
        imageAlt={"This is the display image for the Jham Case Study, which takes you to the project overview."}
        title={"Building a convenient IT helpdesk experience"}
        year={"2020-2021"}  
      />

      <CaseCard 
        imageSrc={jhamDisplay}
        imageAlt={"This is the display image for the Typographit Case Study, which takes you to the project overview."}
        title={"Concepting a font management system"}
        year={"2020-2021"}  
      />

      <CaseCard 
        imageSrc={jhamDisplay}
        imageAlt={"This is the display image for the Clubhouse Redesign Case Study, which takes you to the project overview."}
        title={"Reimagining the Clubhouse experience"}
        year={"2020-2021"}  
      />


    </div>
  )
}
