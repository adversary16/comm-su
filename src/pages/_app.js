import '../styles/remote.scss';
import '../styles/icons.scss';
import '../styles/flags.scss';
import React from 'react';
import App, {Container} from 'next/app';
import GenericContainer from '../containers/GenericContainer/GenericContainer';

const MyApp = (props) => {
  const {Component, pageProps} = props;
  return (
    <GenericContainer>
      <Component {...pageProps}/>
    </GenericContainer>
  );
};


export default MyApp;
