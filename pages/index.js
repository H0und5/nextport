// import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';

// images
import menuBar from '../public/menuBar.svg'

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

    </div>
  )
}
