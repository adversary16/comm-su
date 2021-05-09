import React from 'react';
import Image from 'next/image';
import {useRouter} from 'next/router';
import styles from './Banner.module.scss';
import {BANNERS} from '../../const/content';
import {PATHS} from '../../const/routes';

const Paginator = ({bannerList}) => {
  return <div className={styles.pagination}>
    { bannerList.map((_, index) =>
      <div className={styles.pagedot} key={index}/>,
    )
    }
  </div>;
};

const Banner = () => {
  const {route} = useRouter();
  const bannerList = BANNERS[route];

  return <div className={styles.root}>
    {
      bannerList.map(({link, file}) =>
        <img
          src={`${PATHS.BANNER}${file}`}
          key={file}
        />)
    }
    <Paginator {...{bannerList}}/>
  </div>;
};
export default Banner;
