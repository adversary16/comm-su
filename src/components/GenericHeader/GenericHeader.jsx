import React from 'react';
import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import styles from './GenericHeader.module.scss';
import useTranslation from 'next-translate/useTranslation';
import {useRouter} from 'next/dist/client/router';
const GenericHeader = () => {
  const {asPath} = useRouter();
  const {t} = useTranslation('common');
  return <>
    <Head>
      <title>{t(`header.${asPath}`)}</title>
    </Head>
    <div className={styles.root}>
      <Navbar/>
    </div>
  </>;
};
export default GenericHeader;
