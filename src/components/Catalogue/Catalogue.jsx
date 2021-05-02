import React from 'react';
import styles from './Catalogue.module.scss';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {CATALOGUES} from '../../const/content';
import classNames from 'classnames';

const Catalogue = ({t}) => {
  const {route} = useRouter();
  const currentCat = CATALOGUES[route];
  return <div className={styles.root}>
    {
      currentCat && currentCat.map(({id, image, icon, link}) =>
        <div key={id} className={styles.catalogue_item}>
          { icon &&
          <div className={styles.icon_overlay}>
            <div className={classNames(styles.icon, styles[icon])} />
          </div>
          }
          <div className={styles.caption_overlay}>
            <a href={link}>{t(`${'catalogue'}.${id}`)}</a>
          </div>
        </div>,
      )
    }
  </div>;
};
export default Catalogue;
