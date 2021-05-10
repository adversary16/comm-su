import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {SectionHeader} from '../../components/SectionHeader';
import {ContentBlock} from '../../components/ContentBlock';
import {InBlockGrid} from '../../components/InBlockGrid';
import {Timeline} from '../../components/Timeline';
import {PictureWall} from '../../components/PictureWall';
import {DocumentList} from '../../components/DocumentList';
import {PartnerList} from '../../components/PartnerList';
import {GalleryStack} from '../../components/GalleryStack';

const Index = (props) => {
  const {logos, docs, partners, board} = props;
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
    <ContentBlock id={'008'}/>
    <DocumentList docs={docs}/>
    <SectionHeader {...{t, name: 'partners'}}/>
    <PartnerList partners={partners}/>
    <SectionHeader {...{t, name: 'career'}}/>
    <ContentBlock id={'009'}/>
    <SectionHeader {...{t, name: 'board'}}/>
    <GalleryStack contentList={board}/>
  </>;
};

export async function getServerSideProps(context) {
  const url = 'http://localhost:3000/api/content/about';
  const method = 'GET';
  const getQuery = await fetch(url, {
    method,
  });
  const {logos, docs, partners, board = []} = await getQuery.json();
  return {
    props: {
      logos,
      docs,
      partners,
      board,
    },
  };
}

export default Index;
