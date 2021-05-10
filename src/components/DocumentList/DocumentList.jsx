import React from 'react';
import Link from 'next/link';
import styles from './DocumentList.module.scss';
const DocumentList = ({docs}) => {
  return <div className={styles.root}>
    {
      docs.map(({doc, preview, caption}) =>
        <div key={doc} className={styles.item}>
          <Link href={doc}>
            <img src={preview}/>
          </Link>
        </div>,
      )
    }
  </div>;
};
export default DocumentList;
