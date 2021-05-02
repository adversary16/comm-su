import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Navbar/Navbar';
import styles from './GenericHeader.module.scss';
import useTranslation from 'next-translate/useTranslation';
import {useRouter} from 'next/dist/client/router';

const Logo = ({locale, layout}) => {
  return (
    <Link
      href={'/'}
    >
      <Image
        src="/comm_logo_ru.png"
        height="64"
        width="256"
        className={styles.logo}
      />
    </Link>);
};

const GenericHeader = () => {
  const {asPath, locale} = useRouter();
  const {t} = useTranslation('common');
  return <>
    <Head>
      <title>{t(`header.${asPath}`)}</title>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap" rel="stylesheet"/>
    </Head>
    <div className={styles.root}>
      <Logo
        {...{locale}}
      />
      <Navbar/>
    </div>
  </>;
};
export default GenericHeader;
