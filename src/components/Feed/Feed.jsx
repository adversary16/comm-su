import React from 'react';
import styles from './Feed.module.scss';
const Feed = ({source, type, columnStart, columnWidth = 1}) => {
  return (<div
    className={(styles.root)}
    style={{
      '--columnStart': columnStart+1,
      '--columnWidth': (columnWidth === 1) ? 1 : columnWidth -1,
    }}>
    <div className={styles.header}>{type}</div>
  </div>);
};
export default Feed;
