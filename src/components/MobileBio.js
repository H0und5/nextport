
import styles from '../../styles/MobileBio.module.css';
import SmallDivider from './SmallDivider';

const MobileBio = () => {

  return (
    <div className={styles.mobileBioContainer}>
      Digital product designer <span className={styles.mobileBioGreyed}> located in Dallas, currently building interactive experiences at a fin-tech startup.
      <SmallDivider />
      Open to opportunities.</span> 
    </div>
  )
}


export default MobileBio;