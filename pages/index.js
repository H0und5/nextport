// import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';

// images
import giveDisplay from '../public/giveDisplay.jpeg';
import jhamDisplay from '../public/jhamDisplay.jpeg';


// import home JSON object
import home from '../src/assets/home.json';

// components
import NavBar from '../src/components/NavBar';
import CaseCard from '../src/components/CaseCard';


export default function Home() {
  return (
    <div className={styles.container}>

      <NavBar />

      <div className={styles.headerDivider}></div>

      <CaseCard 
        imageSrc={giveDisplay}
        imageAlt={"This is the display image for the Givelify Case Study"}
        title={"Designing a magical donation experience"}
        year={"2021-2022"}  
      />
      
      <CaseCard 
        imageSrc={jhamDisplay}
        imageAlt={"This is the display image for the Jham Case Study"}
        title={"Building a convenient IT helpdesk experience"}
        year={"2020-2021"}  
      />

    </div>
  )
}
