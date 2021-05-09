import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Navbar/Navbar';
import styles from './GenericHeader.module.scss';
import useTranslation from 'next-translate/useTranslation';
import {useRouter} from 'next/dist/client/router';
import {SUBPAGES} from '../../const/content';

const Logo = ({locale, layout}) => {
  return (
    <Link
      href={'/'}
    >
      <img
        src="/comm_logo_ru.png"
        className={styles.logo}
      />
    </Link>);
};

const MenuButton = ({onClick}) => {
  return <div className={styles.menuButton} onClick={onClick}/>;
};

const SubRouteMenu = ({subroutes, route, t}) => {
  return <div className={styles.sub_root}>
    {
      subroutes.map(({path, isAnchor}, index) =>
        <Link key={index} href={ isAnchor? `/${path}` : `#${path}`}>
          <div
            className={styles.link}
          >
            {t(`header.${route}.subroutes.${path}.title`)}
          </div>
        </Link>)
    }
  </div>;
};

const GenericHeader = () => {
  const {asPath, locale, route} = useRouter();
  const subRoutes = SUBPAGES[route];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    return setIsMenuOpen((prevState) => !prevState);
  };

  const {t} = useTranslation('common');
  return <>
    <Head>
      <title>{t(`header.${route}.title`)}</title>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap" rel="stylesheet"/>
      <meta
        property="og:title"
        content="Системный интегратор COMMUNICATIONS.SU"
      />
      <meta
        property="og:description"
        content="Промышленная связь и системы оповещения для производств."
      />
      <meta
        property="og:image"
        content="/comm_logo_ru.png"
      />
    </Head>
    <div className={styles.root}>
      <Logo
        {...{locale}}
      />
      <Navbar {...{isMenuOpen}}/>
      <MenuButton onClick={toggleMenu}/>
    </div>
    {
      subRoutes && <SubRouteMenu subroutes={subRoutes} route={route} t={t}/>
    }
  </>;
};
export default GenericHeader;
