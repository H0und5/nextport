import Link from 'next/link';
import styles from '../../styles/CopyCard.module.css';

const CopyCard = ({ title, description, link, linkSource }) => {

  return (
    <div className={styles.copyCardContainer}>
      <div className={styles.copyCardContent}>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <Link href={linkSource}>
        <a className={styles.copyCardLink} target={"_blank"}>{link}</a>
      </Link>
    </div>
  )
}

export default CopyCard;