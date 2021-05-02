import React, {useState} from 'react';
import useTranslation from 'next-translate/useTranslation';
import styles from './Navbar.module.scss';
import classNames from 'classnames';
import Link from 'next/link';
import {ROUTES} from '../../const/routes';
import {useRouter} from 'next/dist/client/router';

const PhoneIcon = () => {
  return <div className={styles.phone}/>;
};

const ContactBlock = ({t}) => {
  return <div className={styles.contacts}>
    <PhoneIcon/>
    <Link href={`phone://${t('phonenumber')}`}>
      <a className={classNames(styles.link)}>
        {t('phoneNumber')}
      </a>
    </Link>
  </div>;
};

const SecondaryMenu = ({secondaryRoutes, t, route}) => {
  return <div className={styles.secondaryMenu}>
    {
      Object.entries(secondaryRoutes).map(([alias, properties]) =>
        <Link
          href={alias}
          key={alias}
        ><a
            className={
              classNames(
                  styles.link,
                  styles.secondary,
                  properties.icon && styles[properties.icon],
                  (route === alias) && styles.current)
            }>
            {t(`header.${alias}`)}
          </a>
        </Link>,
      )
    }
  </div>;
};

const LocaleToggler = () => {
  const {
    push,
    locales,
    pathname,
    locale: currentLocale,
  } = useRouter();
  const switchLocale = ({target}) => {
    const {value: locale} = target.attributes.locale;
    return push(pathname, pathname, {locale});
  };
  return <div className={styles.locales}>
    {locales.map( (locale) =>
      <a
        className={
          classNames(styles.link,
              (currentLocale === locale) && styles.current)
        }
        locale={locale}
        key={locale}
        onClick={switchLocale}
      >
        {locale.toUpperCase()}
      </a>)
    }
  </div>;
};


const Navbar = ({isMenuOpen}) => {
  const {route} = useRouter();
  const {t} = useTranslation('common');
  const {mainRoutes, secondaryRoutes} = Object.entries(ROUTES)
      .reduce( (acc, [alias, route]) => {
        const {mainRoutes, secondaryRoutes} = acc;
        if (route.navBar) {
          return {
            mainRoutes: {...mainRoutes, [alias]: route},
            secondaryRoutes,
          };
        };
        return {mainRoutes,
          secondaryRoutes:
        {
          ...secondaryRoutes,
          [alias]: route,
        }};
      }, {
        mainRoutes: {},
        secondaryRoutes: {},
      });

  return <div className={classNames(styles.root, isMenuOpen && styles.isOpen)}>
    {
      Object.entries(mainRoutes).map(([alias, properties]) =>
        <Link
          href={alias}
          key={alias}
        ><a
            className={
              classNames(styles.link, (route === alias) && styles.current)
            }>
            {t(`header.${alias}`)}
          </a>
        </Link>,
      )
    }
    {
      secondaryRoutes && <SecondaryMenu { ...{secondaryRoutes, t, route}}/>
    }
    <ContactBlock {...{t}}/>
    <LocaleToggler/>
  </div>;
};
export default Navbar;
