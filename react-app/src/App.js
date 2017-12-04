import React from 'react';
import 'sanitize.css';
import styled from 'styled-components';
import NavigationBar from './components/NavigationBar';
import MainPanel from './components/MainPanel';

const AppWraper = styled.div`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  * {
    transition-property: all;
    transition-duration: .2s;
  }
  
`;

const App = () => (
  <AppWraper>
    <NavigationBar />
    <MainPanel />
  </AppWraper>
);

export default App;
