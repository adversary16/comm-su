import React from 'react';
import Link from 'next/link';
import styles from './DocumentList.module.scss';
import {useRouter} from 'next/router';
const DocumentList = ({docs}) => {
  const {locale} = useRouter();
  return <div className={styles.root}>
    {
      docs.map(({doc, preview, caption}) =>
        <Link href={doc} key={doc} >
          <div className={styles.item}>
            <img src={preview}/>
            <a className={styles.caption}>{caption[locale]}</a>
          </div>
        </Link>,
      )
    }
  </div>;
};
export default DocumentList;
