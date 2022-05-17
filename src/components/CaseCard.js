import Image from "next/image";

import styles from '../../styles/CaseCard.module.css';

const CaseCard = ({ imageSrc, imageAlt, title, year }) => {
  
  return (
    <div className={styles.caseCardContainer}>
      <div className={styles.caseCardImageContainer}>
        <Image src={imageSrc} alt={imageAlt} height="1600" layout="responsive" objectFit="cover"/>
      </div>
      <div className={styles.caseCardContent}>
        <h5>{title}</h5>
        <p>{year}</p>
      </div>
    </div>
  )
}

export default CaseCard;