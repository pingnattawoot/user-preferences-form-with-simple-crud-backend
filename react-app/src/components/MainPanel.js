import React from 'react';
import styled from 'styled-components';

const MainPanelWrapper = styled.div`
  background: #ebeced;
  min-height: 1000px;
  z-index: inherit;
  justify-content: center;
`;

const MainPanel = () => (
  <MainPanelWrapper>
    this is main panel
  </MainPanelWrapper>
);


export default MainPanel;
