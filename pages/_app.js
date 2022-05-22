import Header from '../src/components/header/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  // anything in here will be persistent between pages
  return (
    // this is for every page
    // how can we make the navbar be the same for every page?
    <div>
      <Header />
     <Component {...pageProps} />
    </div>
    )
}

export default MyApp
