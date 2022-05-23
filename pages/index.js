// import Head from 'next/head'
import styles from '../styles/Home.module.css';

// images
import giveDisplay from '../public/giveDisplay.jpeg';
import jhamDisplay from '../public/jhamDisplay.jpeg';


// // import home JSON object
// import home from '../src/assets/home.json';

// components
import CaseCard from '../src/components/Cards/CaseCard';
import BigDivider from '../src/components/Dividers/BigDivider';
import SmallDivider from '../src/components/Dividers/SmallDivider';
import SectionHeader from '../src/components/SectionHeader/SectionHeader';
import CopyCard from '../src/components/Cards/CopyCard';
import MobileButton from '../src/components/Buttons/MobileButton';
import MobileBio from '../src/components/MobileBio/MobileBio';
import Footer from '../src/components/Footer/Footer';


export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.headerDivider}></div>

      <MobileBio />

      <CaseCard 
        imageSrc={giveDisplay}
        imageAlt={"This is the display image for the Givelify Case Study"}
        title={"Designing a magical donation experience"}
        year={"2021-2022"}  
        linkSource={"/work/givelify"}
      />
      
      <CaseCard 
        imageSrc={jhamDisplay}
        imageAlt={"This is the display image for the Jham Case Study"}
        title={"Building a convenient IT helpdesk experience"}
        year={"2020-2021"}  
        linkSource={"/work/jham"}
      />

      {/* Start of Playground Section */}

      <SmallDivider />

      <SectionHeader title={"Playground"} link={'/'}/>
      
      <div className={styles.sectionRows}>
        <CopyCard 
          title={"UI Mission"}
          description={"Randomized UI prompts that to help designers stay in constraints working with other systems."}
          link={"View live site ->"}
          linkSource={"/writings/two"}
        />
        
        <CopyCard 
          title={"GitBuds"}
          description={"Randomized UI prompts that to help designers stay in constraints working with other systems."}
          link={"View live site ->"}
          linkSource={"/writings/two"}
        />
      </div>
      
      {/* Start of Writings Section */}

      <BigDivider />

      <SectionHeader title={"Writings"} link={'/'}/>

      <div className={styles.sectionRows}>
        <CopyCard 
          title={"Manifesto"}
          description={"To aim for excellence in the face of challenges and opportunities, is the mark of a designer."}
          link={"Read article ->"}
          linkSource={"/writings/two"}
        />

        <CopyCard 
          title={"What I want to achieve early in my career"}
          description={"A written goal for what I’ll be aiming for over these next few years and something I hope to achieve."}
          link={"Read article ->"}
          linkSource={"/writings/two"}
        />
      </div>

      {/* Start of Bookshelf Section */}

      <BigDivider />

      <SectionHeader title={"Bookshelf"} cta={'VIEW ALL'} arrow={'->'} link={"/bookshelf"}/>

      <div className={styles.sectionRows}>
        <CopyCard 
          title={"Range"}
          description={"A book about why generalists triumph in a specialized world is a 2019 book by David Epstein."}
          link={"Buy from publisher ->"}
          linkSource={"/writings/two"}
        />

        <CopyCard 
          title={"Thinking in Systems"}
          description={"Offers insight for problem solving on scales of personal and global by Donella Meadows."}
          link={"Buy from publisher ->"}
          linkSource={"/writings/two"}
        />
      </div>

      <SmallDivider />

      <div className={styles.sectionRows}>
        <CopyCard 
          title={"Sapiens"}
          description={"Details the whole of human history through the Cognitive, Agricultural, and Scientific Revolutions."}
          link={"Buy from publisher ->"}
          linkSource={"/writings/two"}
        />

        <CopyCard 
          title={"User-Friendly"}
          description={"How a paradigm that machines should anticipate what we need, quietly rules our modern lives."}
          link={"Buy from publisher ->"}
          linkSource={"/writings/two"}
        />
      </div>

      <MobileButton cta={"VIEW ALL"} />

      <BigDivider />

      <div className={styles.headerDivider}></div>

      <Footer />

      <SmallDivider />
      <SmallDivider />
    </div>
  )
}
