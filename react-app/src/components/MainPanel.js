import React from 'react';
import styled from 'styled-components';
import Preferences from './Preferences';

const MainPanelWrapper = styled.div`
  padding: 12px 12px 48px;
  background: #ebeced;
  min-height: 1000px;
  z-index: inherit;
`;

const MainPanel = () => (
  <MainPanelWrapper>
    <Preferences />
  </MainPanelWrapper>
);

export default MainPanel;
