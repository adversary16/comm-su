import React from 'react';
import {ContentBlock} from '../ContentBlock';
import styles from './InBlockGrid.module.scss';
const InBlockGrid = ({id}) => {
  return <div className={styles.root}>
    {
      id.map((item) =>
        <ContentBlock
          id={item}
          className={styles.gridItem}
        />)
    }
  </div>;
};
export default InBlockGrid;
