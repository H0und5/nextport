import Image from "next/image";
import Link from "next/link";


import styles from './CaseCard.module.css';

const CaseCard = ({ imageSrc, imageAlt, title, year, linkSource }) => {
  
  return (
    <div className={styles.caseCardContainer}>
      <div className={styles.caseCardImageContainer}>
        <Link href={linkSource}>
          <Image src={imageSrc} alt={imageAlt} height="1600" layout="responsive" objectFit="cover"/>
        </Link>
      </div>
      <div className={styles.caseCardContent}>
        <h5>{title}</h5>
        <p>{year}</p>
      </div>
    </div>
  )
}

export default CaseCard;