// import Head from 'next/head'
import styles from '../styles/Home.module.css';

// images
import giveDisplay from '../public/giveDisplay.jpeg';
import jhamDisplay from '../public/jhamDisplay.jpeg';


// import home JSON object
import home from '../src/assets/home.json';

// components
import NavBar from '../src/components/NavBar';
import CaseCard from '../src/components/CaseCard';
import BigDivider from '../src/components/BigDivider';
import SmallDivider from '../src/components/SmallDivider';
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

      {/* Start of Playground Section */}

      <BigDivider />

      <SectionHeader title={"Playground"}/>
      
      <div className={styles.sectionRows}>
        <CopyCard 
          title={"UI Mission"}
          description={"Randomized UI prompts that to help designers stay in constraints working with other systems."}
          link={"Visit site ->"}
          linkSource={"/writings/two"}
        />
        
        <CopyCard 
          title={"GitBuds"}
          description={"Randomized UI prompts that to help designers stay in constraints working with other systems."}
          link={"Visit site ->"}
          linkSource={"/writings/two"}
        />
      </div>

      <SmallDivider />
      
      <div className={styles.sectionRows}>
        <CopyCard 
          title={"Battled"}
          description={"Randomized UI prompts that to help designers stay in constraints working with other systems."}
          link={"Visit site ->"}
          linkSource={"/writings/two"}
        />

        <CopyCard 
          title={"Da Todo"}
          description={"Randomized UI prompts that to help designers stay in constraints working with other systems."}
          link={"Visit site ->"}
          linkSource={"/writings/two"}
        />
      </div>
      
      {/* Start of Writings Section */}

      <BigDivider />

      <SectionHeader title={"Writings"}/>

      <div className={styles.sectionRows}>
        <CopyCard 
          title={"Manifesto"}
          description={"Randomized UI prompts that to help designers stay in constraints working with other systems."}
          link={"Visit site ->"}
          linkSource={"/writings/two"}
        />

        <CopyCard 
          title={"What I want to achieve early in my career"}
          description={"Randomized UI prompts that to help designers stay in constraints working with other systems."}
          link={"Visit site ->"}
          linkSource={"/writings/two"}
        />
      </div>

      {/* Start of Bookshelf Section */}

      <BigDivider />

      <SectionHeader title={"Bookshelf"}/>

      <div className={styles.sectionRows}>
        <CopyCard 
          title={"Manifesto"}
          description={"Randomized UI prompts that to help designers stay in constraints working with other systems."}
          link={"Visit site ->"}
          linkSource={"/writings/two"}
        />

        <CopyCard 
          title={"What I want to achieve early in my career"}
          description={"Randomized UI prompts that to help designers stay in constraints working with other systems."}
          link={"Visit site ->"}
          linkSource={"/writings/two"}
        />
      </div>

      <SmallDivider />

      <div className={styles.sectionRows}>
        <CopyCard 
          title={"Manifesto"}
          description={"Randomized UI prompts that to help designers stay in constraints working with other systems."}
          link={"Visit site ->"}
          linkSource={"/writings/two"}
        />

        <CopyCard 
          title={"What I want to achieve early in my career"}
          description={"Randomized UI prompts that to help designers stay in constraints working with other systems."}
          link={"Visit site ->"}
          linkSource={"/writings/two"}
        />
      </div>

      <BigDivider />
      <BigDivider />

    </div>
  )
}
