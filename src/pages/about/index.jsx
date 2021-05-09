import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {SectionHeader} from '../../components/SectionHeader';
import {ContentBlock} from '../../components/ContentBlock';
import {InBlockGrid} from '../../components/InBlockGrid';
import {Timeline} from '../../components/Timeline';
const Index = () => {
  const {t} = useTranslation('about');
  return <>
    <ContentBlock id={'001'}/>
    <SectionHeader {...{t, name: 'advantages'}}/>
    <InBlockGrid id={['002', '003', '004', '005', '006', '007']}/>
    <SectionHeader {...{t, name: 'history'}}/>
    <Timeline t={t}/>
    <SectionHeader {...{t, name: 'clients'}}/>
    <SectionHeader {...{t, name: 'policy'}}/>
    <SectionHeader {...{t, name: 'partners'}}/>
    <SectionHeader {...{t, name: 'career'}}/>
    <SectionHeader {...{t, name: 'board'}}/>
  </>;
};

export default Index;
