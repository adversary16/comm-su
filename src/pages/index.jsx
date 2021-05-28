import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {Banner} from '../components/Banner/';
import {Catalogue} from '../components/Catalogue';
import {SectionHeader} from '../components/SectionHeader';
import GalleryStack from '../components/GalleryStack/GalleryStack';
import {ContactBlock} from '../components/ContactBlock';
import ContentBlock from '../components/ContentBlock/ContentBlock';

const Index = () => {
  const {t} = useTranslation('main');
  return <>
    <Banner/>
    <Catalogue {...{t}}/>
    <ContentBlock {...{id: '001'}} />
    <SectionHeader {...{t, name: 'projectexamples'}}/>
    <GalleryStack {...{t, contentId: 'projectexamples'}}/>
    {/* <SectionHeader {...{t, name: 'contacts'}}/>
    <ContactBlock/> */}
    {/* <ThreeColSection>
      <Feed type={'press'} columnStart={1} columnWidth={1}/>
      <Feed type={'news'} columnStart={2} columnWidth={2}/>
    </ThreeColSection> */}
  </>;
};

export default Index;
