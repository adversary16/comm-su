import classNames from 'classnames';
import {useRouter} from 'next/router';
import React from 'react';
import styles from './PartnerList.module.scss';
const PartnerList = ({partners}) => {
  const {locale} = useRouter();
  return <div className={styles.root}>
    {
      partners.map(({company, description, logo, country}) => <div className={styles.item}>
        <div className={styles.header}>
          <div className={styles.logo}><img src={logo}/></div>
          <span className={styles.title} >{company[locale] || Object.values(company)[0]}</span>
          <span className={classNames(styles.country, styles[`country_${country}`])} ></span>
        </div>
        <div className={styles.description}>
          {description[locale] || Object.values(description)[0]}
        </div>
      </div>)
    }
  </div>;
};
export default PartnerList;
