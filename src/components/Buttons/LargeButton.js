import styles from "./LargeButton.module.css";
import Link from "next/link";

const LargeButton = ({ buttonCopy, srcTo }) => {
  return (
    <Link href={`${srcTo}`}>
      <button type="button" className={styles.buttonContainer}>

                <p className={styles.buttonCopy}>{`${buttonCopy}`}<span className={styles.arrowCta}>{' ->'}</span></p>

      </button>
      </Link>
  );
};

export default LargeButton;
