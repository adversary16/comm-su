import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import ReactHtmlParser from 'react-html-parser';
import {useRouter} from 'next/router';
import React from 'react';
import styles from './ContentBlock.module.scss';
const ContentBlock = ({id, className}) => {
  const {route} = useRouter();
  const contentPath = route.split('/')[1] || 'common';
  const {t} = useTranslation(contentPath);
  const {content, icon, title} = t(`content.${id}`, {}, {returnObjects: true});
  const HTMLContent = ReactHtmlParser(content);

  return <div className={classNames(className, styles.root)}>
    <div className={styles.header}>
      {icon && <img src={icon} className={styles.icon}/>}
      {title && <h3 className={styles.title}>{title}</h3>}
    </div>
    <div className={styles.content}>{HTMLContent}</div>
  </div>;
};
export default ContentBlock;
