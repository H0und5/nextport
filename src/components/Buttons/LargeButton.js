import styles from "./LargeButton.module.css";
import Link from "next/link";

const LargeButton = ({ buttonCopy, srcTo }) => {
  return (
      <button type="button" className={styles.buttonContainer}>
        <Link href={srcTo}>
                <p>{`${buttonCopy} ->`}</p>
        </Link>
      </button>
  );
};

export default LargeButton;
