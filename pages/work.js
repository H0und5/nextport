// import Head from 'next/head'
import styles from '../styles/Home.module.css';

// JSON object
import work from '../src/assets/workData';

import Head from 'next/head';

// // images
// import giveDisplay from '../public/giveDisplay.jpeg';
// import jhamDisplay from '../public/jhamDisplay.jpeg';
// import typeDisplay from '../public/typographitDisplay.jpeg';
// import clubhouseDisplay from '../public/clubhouseDisplay.jpeg'

// components
import CaseCard from '../src/components/Cards/CaseCard';

import splashImage from '../public/splashImage.jpeg';


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


export default function Work() {
  return (
    <div className={styles.container}>

<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Work case studies - Om Nagarkar - Product Designer</title>

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />

        {/* Open Graph */}
        <meta property="og:url" content="omnextport.vercel.app/playground" key="ogurl" />
        <meta property="og:image" content={splashImage} key="ogimage" />
        <meta
          property="og:site_name"
          content="Work portfolio of Om Nagarkar - Product Designer"
          key="ogsitename"
        />
        <meta
          property="og:title"
          content="Work page of Om Nagarkar's Portfolio"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Work of Om Nagarkar, product designer based in Dallas, TX"
          key="ogdesc"
        />
      </Head>

      {workPage}

    </div>
  )
}
