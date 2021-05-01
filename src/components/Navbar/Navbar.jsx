import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import styles from './Navbar.module.scss';
import classNames from 'classnames';
import {ROUTES} from '../../const/routes';
import {useRouter} from 'next/dist/client/router';
const Navbar = () => {
  const {asPath} = useRouter();
  const {t} = useTranslation('common');
  const navBarRoutes = Object.entries(ROUTES)
      .filter(([_, {navBar}]) => navBar);
  return <div className={styles.root}>
    {
      navBarRoutes.map(([alias, properties]) =>
        <a
          href={alias}
          key={alias}
          className={
            classNames(styles.link, (asPath === alias) && styles.current)
          }
        >
          {t(`header.${alias}`)}
        </a>,
      )
    }
  </div>;
};
export default Navbar;
