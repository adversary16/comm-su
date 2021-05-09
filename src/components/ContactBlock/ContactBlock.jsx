import React from 'react';
import {MailForm} from '../MailForm';
import styles from './ContactBlock.module.scss';
const ContactBlock = () => {
  return <div className={styles.root}>
    <div className={styles.contentblock}>
      <span>    8 (800) 700-94-83</span>
      <span>ООО «КОММУНИКАЦИИ»</span>
      <span>ИНДЕКС 198095,</span>
      <span>САНКТ-ПЕТЕРБУРГ,
МИТРОФАНЬЕВСКОЕ Ш., Д. 10,
БЦ "ТРОИЦКИЙ"
INFO @COMMS.RU</span>
    </div>
    <MailForm className={styles.mailform}/>
  </div>;
};
export default ContactBlock;
