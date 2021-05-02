import React from 'react';
import Image from 'next/image';
import {useRouter} from 'next/router';
import styles from './Banner.module.scss';
import {BANNERS} from '../../const/content';
import {PATHS} from '../../const/routes';

const Paginator = () => {
  return <div></div>;
};

const Banner = () => {
  const {route} = useRouter();
  const bannerList = BANNERS[route];

  return <div className={styles.root}>
    {
      bannerList.map(({link, file}) =>
        <Image
          src={`${PATHS.BANNER}${file}`}
          width={1920}
          height={404}
          key={file}
        />)
    }
  </div>;
};
export default Banner;
