import React from 'react';
import GenericFooter from '../../components/GenericFooter/GenericFooter';
import GenericHeader from '../../components/GenericHeader/GenericHeader';
import styles from './GenericContainer.module.scss';
const GenericContainer = ({children}) => {
  return (<div className={styles.root}>
    <GenericHeader/>
    {children}
    <GenericFooter/>
  </div>);
};
export default GenericContainer;
