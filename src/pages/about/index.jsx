import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {SectionHeader} from '../../components/SectionHeader';
import {ContentBlock} from '../../components/ContentBlock';
import {InBlockGrid} from '../../components/InBlockGrid';
import {Timeline} from '../../components/Timeline';
import {PictureWall} from '../../components/PictureWall';
const Index = (props) => {
  const {logos} = props;
  const {t} = useTranslation('about');
  return <>
    <ContentBlock id={'001'}/>
    <SectionHeader {...{t, name: 'advantages'}}/>
    <InBlockGrid id={['002', '003', '004', '005', '006', '007']}/>
    <SectionHeader {...{t, name: 'history'}}/>
    <Timeline t={t}/>
    <SectionHeader {...{t, name: 'clients'}}/>
    <PictureWall pictures={logos}/>
    <SectionHeader {...{t, name: 'policy'}}/>
    <SectionHeader {...{t, name: 'partners'}}/>
    <SectionHeader {...{t, name: 'career'}}/>
    <SectionHeader {...{t, name: 'board'}}/>
  </>;
};

export async function getServerSideProps(context) {
  const url = 'http://localhost:3000/api/clients/getLogos';
  const method = 'GET';
  const getQuery = await fetch(url, {
    method,
  });
  const logos = await getQuery.json();
  return {
    props: {
      logos,
    },
  };
}

export default Index;
