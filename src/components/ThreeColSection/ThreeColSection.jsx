import React from 'react';
import styles from './ThreeColSection.module.scss';
const ThreeColSection = ({children}) => {
  return (
    <div className={styles.root}>
      {children}
    </div>);
};
export default ThreeColSection;
