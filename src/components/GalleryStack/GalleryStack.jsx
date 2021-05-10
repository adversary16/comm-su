import React from 'react';
import styles from './GalleryStack.module.scss';
import {CONTENT_ITEMS} from '../../const/content';
import ReactHtmlParser from 'react-html-parser';
import classNames from 'classnames';
const GalleryStack = ({t, contentId, contentList, className}) => {
  const content = contentList || CONTENT_ITEMS[contentId].map(({id, image}) => {
    const title = t(`contentItems.${id}.title`);
    const text = t(`contentItems.${id}.text`);
    return {
      image, title, text, id,
    };
  });
  return (
    <div className={classNames(styles.root, className)}>
      {
        content.map(({title, text, image, id, ...rest}) =>
          <div className={styles.entry} key={id}>
            <div className={styles.image}>
              <img src={`/img/${image}`}></img>
            </div>
            <div className={styles.description}>
              <div className={styles.title}>{title}</div>
              <div className={styles.text}>{ReactHtmlParser(text)}</div>
            </div>
          </div>,
        )}
    </div>
  );
};
export default GalleryStack;
