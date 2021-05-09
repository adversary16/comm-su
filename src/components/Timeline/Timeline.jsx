import React from 'react';
import styles from './Timeline.module.scss';
const Timeline = ({t}) => {
  const timeline = t('timeline', {}, {returnObjects: true});
  return <div className={styles.root}>
    {
      timeline.map(({year, content}, index) =>
        <div className={styles.year} key={year}>
          {
            (index %2) ?
            <>          <span className={styles.content}>{content}</span>
              <span className={styles.title}>{year}</span></> :
            <> <span className={styles.title}>{year}</span>
              <span className={styles.content}>{content}</span> </>
          }
        </div>)
    }
  </div>;
};
export default Timeline;
