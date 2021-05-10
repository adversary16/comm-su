import React from 'react';
import styles from './DocumentList.module.scss';
const DocumentList = ({docs}) => {
  console.log(docs);
  return <div className={styles.root}>
    {
      docs.map(({doc, preview, caption}) => <img src={preview}/>)
    }
  </div>;
};
export default DocumentList;
