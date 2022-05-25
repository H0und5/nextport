import styles from './DisplayCard.module.css';

import Image from 'next/image';

const DisplayCard = ({ imageSrc, alt, title, description, cta, link }) => {
  
  return (
    <div className={styles.displayCardContainer}>
      <Image src={imageSrc} alt={alt} layout="intrinsic"/>
      <div className={styles.displayCardCopy}>
        <h6>{title}</h6>

        <p>{description}</p>
      </div>
      <a href={link} className={styles.displayCardCta}>{cta}{" ->"}</a>
    </div>
  )
}

export default DisplayCard;