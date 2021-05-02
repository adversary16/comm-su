import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {Banner} from '../components/Banner/';
import {Catalogue} from '../components/Catalogue';
import {SectionHeader} from '../components/SectionHeader';

const Index = () => {
  const {t} = useTranslation('main');
  return <>
    <Banner/>
    <SectionHeader {...{t, name: 'systemsolutions'}}/>
    <Catalogue {...{t}}/>
    <SectionHeader {...{t, name: 'projectexamples'}}/>
  </>;
};

export default Index;