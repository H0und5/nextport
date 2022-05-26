import styles from '../Buttons/MobileButton.module.css';

import Link from 'next/link';

const MobileButton = ({ cta, srcTo }) => {

  return (
    <button className={styles.buttonContainer}>
      <span className={styles.buttonCta}>
        <Link href={`${srcTo}`}>{cta}</Link>
      </span>
      <span className={styles.buttonArrow}>
        {' ->'}
      </span>
    </button>
  )
}

export default MobileButton;
