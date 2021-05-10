import React, {useState} from 'react';
import ReactHtmlParser from 'react-html-parser';
import styles from './TabbedShowroom.module.scss';
import {useRouter} from 'next/router';
import classNames from 'classnames';
const ContentsTab = ({content, onSelection, pickedContent}) => {
  const {locale} = useRouter();
  return <div className={styles.contents_root}>
    {
      content.map( ({title, image}, index) => <div
        style={{'background-image': `url(${image})`}}
        className={classNames(styles.contents_entry, (pickedContent === index) && styles.picked)}
        key={`contents_${index}`}
        onClick={ ()=>{
          onSelection(index);
        }}
      >
        <span className={styles.title}>{title[locale] || Object.values(title)[0]}</span>
        <span className={styles.backgrounder}/>
      </div>)
    }
  </div>;
};

const MainTab = ({content}) => {
  const {locale} = useRouter();
  const {image, title, description} = content;
  return <div className={styles.main_root}>
    <div
      className={styles.image}
      style={{'background-image': `url(${image})`}}>

    </div>
    <div className={styles.text}>
      <h1 className={styles.title}>{title[locale] || Object.values(title)[0]}</h1>
      <div className={styles.description}>{ ReactHtmlParser(description && (description[locale] || Object.values(description)[0]))}</div>
    </div>
  </div>;
};
const TabbedShowroom = ({content}) => {
  const [pickedContent, setPickedContent] = useState(0);
  const pickContent = (index) => {
    setPickedContent(index);
  };
  const {locale} = useRouter();
  return <div className={styles.root}>
    <ContentsTab content={content} onSelection={pickContent} pickedContent={pickedContent}/>
    <MainTab content={Object.values(content)[pickedContent]}/>
  </div>;
};
export default TabbedShowroom;
