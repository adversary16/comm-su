import React, {useState} from 'react';
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
        width="234"
        className={styles.logo}
      />
    </Link>);
};

const MenuButton = ({onClick}) => {
  return <div className={styles.menuButton} onClick={onClick}/>;
};

const GenericHeader = () => {
  const {asPath, locale} = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    return setIsMenuOpen((prevState) => !prevState);
  };

  const {t} = useTranslation('common');
  return <>
    <Head>
      <title>{t(`header.${asPath}`)}</title>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap" rel="stylesheet"/>
      <meta property="og:title" content="Системный интегратор COMMUNICATIONS.SU" />
      <meta property="og:description" content="Промышленная связь и системы оповещения для производств." />
      <meta property="og:image" content="/comm_logo_ru.png" />
    </Head>
    <div className={styles.root}>
      <Logo
        {...{locale}}
      />
      <Navbar {...{isMenuOpen}}/>
      <MenuButton onClick={toggleMenu}/>
    </div>
  </>;
};
export default GenericHeader;
