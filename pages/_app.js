import SmallDivider from '../src/components/Dividers/SmallDivider';
import Footer from '../src/components/Footer/Footer';
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
      <div className={styles.headerDivider}></div>
      <Footer />
      <SmallDivider />
    </div>
    )
}

export default MyApp
