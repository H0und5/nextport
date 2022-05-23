import Image from "next/image";
import styles from './ImageCaseCover.module.css';

const ImageCaseCover = ({ imageSrc, alt }) => {

  return (
    <Image className={styles.imageCaseCoverContainer} src={imageSrc} layout="fill" alt={alt} width="50%" height="200" objectFit="fill" />
  )
}

export default ImageCaseCover;