// import Head from 'next/head'
import styles from '../styles/Home.module.css';

// components
import NavBar from '../src/components/NavBar';

export default function Home() {
  return (
    <div className={styles.container}>

      <NavBar playground={true}/>

      <div className={styles.headerDivider}></div>



    </div>
  )
}
