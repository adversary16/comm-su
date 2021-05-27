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
      Object.entries(subroutes).map(([key, value]) =>
        <Link key={key} href={ value.isAnchor? `/${key}` : `#${key}`}>
          <div
            className={styles.link}
          >
            {value.title}
          </div>
        </Link>)
    }
  </div>;
};

const GenericHeader = () => {
  const {asPath, locale, route} = useRouter();
  const {t} = useTranslation('common');
  const {title, subroutes} = t(`header.${route}`, {}, {returnObjects: true});
  const subRoutes = SUBPAGES[route];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    return setIsMenuOpen((prevState) => !prevState);
  };

  return <>
    <Head>
      <title>{t(`header.${route}.title`)}</title>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      <meta
        property="og:title"
        content="Комплекснные Коммуникации -- системный интегратор."
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
      <Navbar {...{isMenuOpen}}/>
      <MenuButton onClick={toggleMenu}/>
    </div>
    <Logo
      {...{locale}}
    />
    {
      subroutes && <SubRouteMenu subroutes={subroutes} route={route} t={t}/>
    }
  </>;
};
export default GenericHeader;
