import React from 'react';
import styles from './GalleryStack.module.scss';
import {CONTENT_ITEMS} from '../../const/content';
const GalleryStack = ({t, contentId}) => {
  const content = CONTENT_ITEMS[contentId].map(({id, image}) => {
    const title = t(`contentItems.${id}.title`);
    const text = t(`contentItems.${id}.text`);
    return {
      image, title, text, id,
    };
  });
  return (
    <div className={styles.root}>
      {
        content.map(({title, text, image, id, ...rest}) =>
          <div className={styles.entry} key={id}>
            <div className={styles.image}>
              <img src={`/img/${image}`}></img>
            </div>
            <div className={styles.description}>
              <div className={styles.title}>{title}</div>
              <div className={styles.text}>{text}</div>
            </div>
          </div>,
        )}
    </div>
  );
};
export default GalleryStack;
