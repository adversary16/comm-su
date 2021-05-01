import React from 'react';
import GenericHeader from '../../components/GenericHeader/GenericHeader';
import styles from './GenericContainer.module.scss';
const GenericContainer = ({children}) => {
  return (<div className={styles.root}>
    <GenericHeader/>
    {children}
  </div>);
};
export default GenericContainer;
