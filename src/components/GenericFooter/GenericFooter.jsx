import React from 'react';
import {SectionHeader} from '../SectionHeader';
import {ContactBlock} from '../ContactBlock';
import styles from './GenericFooter.module.scss';
import useTranslation from 'next-translate/useTranslation';
const GenericFooter = () => {
  const {t} = useTranslation('common');
  return <>
    {/* <SectionHeader {...{t, name: 'contacts'}}/> */}
    <ContactBlock/>
  </>;
};
export default GenericFooter;
