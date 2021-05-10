import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {ContentBlock} from '../../components/ContentBlock';
import {SolutionsPage} from '../../components/StaticPages/SolutionsPage';

const Index = () => {
  const {t} = useTranslation('common');
  return <>
    <SolutionsPage/>
  </>;
};

export async function getServerSideProps(context) {
  const url = 'http://localhost:3000/api/content/solutions';
  const method = 'GET';
  const getQuery = await fetch(url, {
    method,
  });
  const {content} = await getQuery.json();
  return {
    props: {
      content,
    },
  };
}

export default Index;
