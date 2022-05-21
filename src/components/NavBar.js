import Image from "next/image"
import Link from "next/link";

import menuBar from '../../public/menuBar.svg';

import styles from '../../styles/NavBar.module.css';

const NavBar = ({ home, work, playground, writings, bookshelf, about }) => {

  // active state CSS className logic
  const homeFill = home ? styles.Home : styles.NotHome;
  const workFill = work ? styles.active : styles.headerMiddleFirst;
  const playgroundFill = playground ? styles.active : styles.headerMiddleFirst;
  const writingsFill = writings ? styles.active : styles.headerMiddleFirst;
  const bookshelfFill = bookshelf ? styles.active : styles.headerMiddleFirst;
  const aboutFill = about ? styles.whiteOut : styles.greyed;



  // JSX return with Link Elements
  return (
    <div className={styles.header}>
      <Link href="/">
        <span className={homeFill}>
          Om Nagarkar
        </span>
      </Link>

      <div className={styles.headerMiddle}>
        <Link href="/work">
          <span className={workFill}>
            Work
          </span>
        </Link>
        <Link href="/playground">
          <span className={playgroundFill}>
            Playground
          </span>
        </Link>
        <Link href="/writings">
          <span className={writingsFill}>
            Writings
          </span>
        </Link>
        <Link href="/bookshelf">
          <span className={bookshelfFill}>
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
          <span className={aboutFill}>
            About
          </span>
        </Link>
      </div>
    </div>
  )
}

export default NavBar;