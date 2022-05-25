import styles from './DisplayCard.module.css';

import Image from 'next/image';

const DisplayCard = ({ imageSrc, alt, title, description, cta, link, targetBlank }) => {
  
  return (
      <div className={styles.displayCardContainer}>
        
        <a href={link} target={targetBlank} rel="noreferrer"><Image src={imageSrc} alt={alt} layout="intrinsic"/></a>
        
        <div className={styles.displayCardCopy}>
          <a href={link} target={targetBlank} rel="noreferrer"><h6>{title}</h6>

          <p>{description}</p></a>
        </div>
        
        <a href={link} className={styles.displayCardCta} rel="noreferrer">{cta}{" ->"}</a>
    
    </div>
  )
}

export default DisplayCard;