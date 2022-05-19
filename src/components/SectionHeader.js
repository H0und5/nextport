import styles from '../../styles/SectionHeader.module.css';

import Link from 'next/link';

const SectionHeader = ({ title }) => {

  return (
    <div className={styles.sectionHeaderContainer}>
      <h3>{title}</h3>
      <Link href="/">
        <a><span style={{letterSpacing: '.02rem'}}>{`View all `}</span>{`->`}</a>
      </Link>
      {/* <a href="/">VIEW ALL -></a> */}
    </div>
  )
}

export default SectionHeader;