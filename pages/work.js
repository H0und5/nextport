// import Head from 'next/head'
import styles from '../styles/Home.module.css';

// JSON object
import work from '../src/assets/work.json';

// images
import giveDisplay from '../public/giveDisplay.jpeg';
import jhamDisplay from '../public/jhamDisplay.jpeg';
import typeDisplay from '../public/typographitDisplay.jpeg';
import clubhouseDisplay from '../public/clubhouseDisplay.jpeg'

// components
import CaseCard from '../src/components/Cards/CaseCard';


// mapping over Case Card, creating a object 
const workPage = work.map(work => <CaseCard 
  key={work.key}
  imageSrc={work.imageSrc}
  imageAlt={work.imageAlt}
  title={work.title}
  year={work.year}
  linkSource={work.linkSource}
/>)

console.log(workPage, work);


export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.headerDivider}></div>

      {workPage}

    </div>
  )
}
