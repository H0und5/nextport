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
import Divider from '../src/components/Divider';
import SectionHeader from '../src/components/SectionHeader';
import CopyCard from '../src/components/CopyCard';


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

      <Divider />

      <SectionHeader title={"Playground"}/>
      
      <div className={styles.sectionRows}>
        <CopyCard 
          title={"UI Mission"}
          description={"Randomized UI prompts that try to help designers stay in constraints working with other systems."}
          link={"Visit site ->"}
          linkSource={"/writings/two"}
        />
        <CopyCard 
          title={"UI Mission"}
          description={"Randomized UI prompts that try to help designers stay in constraints working with other systems."}
          link={"Visit site ->"}
          linkSource={"/writings/two"}
        />
      </div>

      <Divider />

      <SectionHeader title={"Writings"}/>

      <Divider />

      <SectionHeader title={"Bookshelf"}/>

    </div>
  )
}
