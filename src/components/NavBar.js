import Image from "next/image"
import menuBar from '../../public/menuBar.svg';

import styles from '../../styles/NavBar.module.css';

const NavBar = () => {

  return (
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
      <Image className={styles.headerImage} src={menuBar} alt="menu bar" width={20} height={20}/>
      <p>About</p>
    </div>
  </div>
  )
}

export default NavBar;