import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React from 'react';
import {MailForm} from '../MailForm';
import styles from './ContactBlock.module.scss';
const PhoneIcon = () => {
  return <div className={styles.phoneIcon}/>;
};

const ContactBlock = () => {
  const {t} = useTranslation('common');
  return <div className={styles.root}>
    <div className={styles.contentblock}>
      <Link href={`phone://${t('phoneNumber')}`}>
        <span className={styles.phone}>{t('phoneNumber')}</span>
      </Link>
      <span className={styles.compname}>ООО «КОММУНИКАЦИИ»</span>
      <span className={styles.postal}>ИНДЕКС 198095,</span>
      <span className={styles.address}>САНКТ-ПЕТЕРБУРГ,
МИТРОФАНЬЕВСКОЕ Ш., Д. 10,
      </span>
      <span className={styles.email}>
INFO @COMMS.RU
      </span>
    </div>
    <MailForm className={styles.mailform}/>
  </div>;
};
export default ContactBlock;
