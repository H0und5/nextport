// import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';

// images
import menuBar from '../public/menuBar.svg'

// components
import CaseCard from '../src/components/CaseCard';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Om Nagarkar</p>

        <div className={styles.headerMiddle}>
          <p className={styles.headerMiddleFirst}>Work</p>
          <p className={styles.headerMiddleFirst}>Playground</p>
          <p className={styles.headerMiddleFirst}>Writings</p>
          <p className={styles.headerMiddleFirst}>Bookshelf</p>
          <p>Email</p>
        </div>

        <div className={styles.headerLast}>
          <p>About</p>
          <Image className={styles.headerImage} src={menuBar} alt="menu bar" width={20} height={20}/>
        </div>
      </div>

      <div className={styles.headerDivider}></div>

      <CaseCard />

    </div>
  )
}
