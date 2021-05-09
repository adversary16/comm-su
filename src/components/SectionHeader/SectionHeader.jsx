import React from 'react';
import styles from './SectionHeader.module.scss';
const SectionHeader = ({t, name}) => {
  return <a name={name} className={styles.root}>
    {t(name)}
  </a>;
};
export default SectionHeader;
