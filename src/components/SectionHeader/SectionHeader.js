import styles from '../SectionHeader/SectionHeader.module.css';

import Link from 'next/link';

const SectionHeader = ({ title, cta, arrow, link }) => {

  return (
    <div className={styles.sectionHeaderContainer}>
      <h3>{title}</h3>
      <Link href={`${link}`}>
        <a><span style={{letterSpacing: '.02rem'}}>{cta}</span>{arrow}</a>
      </Link>
      {/* <a href="/">VIEW ALL -></a> */}
    </div>
  )
}

export default SectionHeader;