import React from 'react';
import styled from 'styled-components';
import MenuList from './MenuList';
import DisplayPanel from './DisplayPanel';

const MainPanelWrapper = styled.div`
  padding: 12px;
  background: #ebeced;
  min-height: 1000px;
  z-index: inherit;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start
`;

const MainPanel = () => (
  <MainPanelWrapper>
    <MenuList />
    <DisplayPanel />
  </MainPanelWrapper>
);


export default MainPanel;
