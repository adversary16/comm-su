import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {TabbedShowroom} from '../../components/TabbedShowroom';

const Index = ({projects}) => {
  const {t} = useTranslation('common');
  return <>
    <TabbedShowroom content={projects}/>
  </>;
};

export async function getServerSideProps(context) {
  const url = 'http://localhost:3000/api/content/getProjects';
  const method = 'GET';
  const getQuery = await fetch(url, {
    method,
  });
  const {projects} = await getQuery.json();
  return {
    props: {
      projects,
    },
  };
}

export default Index;
