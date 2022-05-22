import Image from "next/image"
import Link from "next/link";
import { useRouter } from 'next/router';

import menuBar from '../../public/menuBar.svg';

import styles from '../../styles/NavBar.module.css';

const NavBar = () => {
  const router = useRouter();

  console.log({ router});


  // // active state CSS className logic
  // const workFill = work ? styles.active : styles.headerMiddleFirst;
  // const playgroundFill = playground ? styles.active : styles.headerMiddleFirst;
  // const writingsFill = writings ? styles.active : styles.headerMiddleFirst;
  // const bookshelfFill = bookshelf ? styles.active : styles.headerMiddleFirst;
  // const aboutFill = about ? styles.whiteOut : styles.greyed;



  // JSX return with Link Elements
  return (
    <div className={styles.header}>
      <Link href="/">
        <span className={router.asPath === '/' ? styles.Home : styles.NotHome}>
          Om Nagarkar
        </span>
      </Link>

      <div className={styles.headerMiddle}>
        <Link href="/work">
          <span className={router.asPath === '/work' ? styles.active : styles.headerMiddleFirst}>
            Work
          </span>
        </Link>
        <Link href="/playground">
          <span className={router.asPath === '/playground' ? styles.active : styles.headerMiddleFirst}>
            Playground
          </span>
        </Link>
        <Link href="/writings">
          <span className={router.asPath === '/writings' ? styles.active : styles.headerMiddleFirst}>
            Writings
          </span>
        </Link>
        <Link href="/bookshelf">
          <span className={router.asPath === '/bookshelf' ? styles.active : styles.headerMiddleFirst}>
            Bookshelf
          </span>
        </Link>
        <Link href="mailto:om@omnagarkar.com">
          <span className={styles.greyed}>Email</span>
        </Link>
      </div>

      <div className={styles.headerLast}>
        <Image className={styles.headerImage} src={menuBar} alt="menu bar" width={20} height={20}/>
        <Link href="/about">
          <span className={router.asPath === '/about' ? styles.whiteOut : styles.greyed}>
            About
          </span>
        </Link>
      </div>
    </div>
  )
}

export default NavBar;