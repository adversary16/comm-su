import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
  const {t} = useTranslation('common');
  return <div>{t('test')}</div>;
};

export default Index;
