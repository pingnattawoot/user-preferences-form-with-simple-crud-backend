import React from 'react';
import styled from 'styled-components';
import MenuList from './MenuList';
import DisplayPanel from './DisplayPanel';

const PreferencesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
`;

const Preferences = () => (
  <PreferencesWrapper>
    <MenuList />
    <DisplayPanel />
  </PreferencesWrapper>
);

export default Preferences;
