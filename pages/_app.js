import Header from '../src/components/Header/Header';
import '../styles/globals.css'
import styles from '../styles/Home.module.css';

function MyApp({ Component, pageProps }) {

  // anything in here will be persistent between pages
  return (
    // this is for every page
    // how can we make the navbar be the same for every page?
    <div>
      <Header />
      <div className={styles.headerDivider}></div>
      <Component {...pageProps} />
    </div>
    )
}

export default MyApp
