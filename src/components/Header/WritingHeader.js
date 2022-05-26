
import styles from './WritingHeader.module.css';

const WritingHeader = ({ title }) => {

  return (
    <div className={styles.writingHeaderContainer}>
      <h1>{title}</h1>
    </div>
  )
}

export default WritingHeader;