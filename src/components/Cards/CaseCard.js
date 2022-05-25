import Image from "next/image";


import styles from './CaseCard.module.css';

const CaseCard = ({ imageSrc, imageAlt, title, year, linkSource }) => {
  
  return (
    <div className={styles.caseCardContainer}>
      <div className={styles.caseCardImageContainer}>
        <a href={linkSource}>
          <Image src={imageSrc} alt={imageAlt} height="1600" width="2800" layout="responsive" objectFit="cover"/>
        </a>
      </div>
      <a href={linkSource}><div className={styles.caseCardContent}>
        <h5>{title}</h5>
        <p>{year}</p>
      </div></a>
    </div>
  )
}

export default CaseCard;