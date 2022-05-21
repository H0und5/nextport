import styles from '../../styles/MobileButton.module.css';

import Link from 'next/link';

const MobileButton = ({ cta }) => {

  return (
    <button className={styles.buttonContainer} href="/bookshelf">
      <span className={styles.buttonCta}>
        <Link href="/bookshelf">{cta}</Link>
      </span>
      <span className={styles.buttonArrow}>
        {' ->'}
      </span>
    </button>
  )
}

export default MobileButton;
