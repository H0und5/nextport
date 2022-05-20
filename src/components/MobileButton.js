import styles from '../../styles/MobileButton.module.css';

const MobileButton = ({ cta }) => {

  return (
    <button className={styles.buttonContainer}>
      <span className={styles.buttonCta}>
        {cta}
      </span>
      <span className={styles.buttonArrow}>
        {' ->'}
      </span>
    </button>
  )
}

export default MobileButton;
