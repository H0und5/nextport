import styles from '../../styles/SectionHeader.module.css';

const SectionHeader = ({ title }) => {

  return (
    <div className={styles.sectionHeaderContainer}>
      <h3>{title}</h3>
      <a>View All</a>
    </div>
  )
}

export default SectionHeader;