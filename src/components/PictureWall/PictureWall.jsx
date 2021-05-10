import React from 'react';
import styles from './PictureWall.module.scss';
const PictureWall = ({pictures}) => {
  return <div className={styles.root}>
    {
      pictures.map((pic, index) =>
        <img src={pic} key={`pic_${pic}`}/>)
    }
  </div>;
};
export default PictureWall;
