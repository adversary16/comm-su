import React from 'react';
import styles from './SectionHeader.module.scss';
const SectionHeader = ({t, name}) => {
  return <div className={styles.root}>
    {t(name)}
  </div>;
};
export default SectionHeader;
