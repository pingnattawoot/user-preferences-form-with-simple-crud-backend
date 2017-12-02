import React from 'react';
import styled from 'styled-components';
import LocalizationSetting from './LocalizationSetting';

const DisplayPanelWrapper = styled.ul`
  width: 728px;
  height: 500px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #e5e6e8;
  list-style: none;
  padding: 4px 0px;
  margin: 0px 8px;
`;

const TextHeader = styled.div`
  color: #333;
  font-size: 16px;
  font-weight: bold;
  padding: 16px;
  height: 50px;
  line-height: 18px;
  border-bottom: 1px solid #f2f2f2;
`;


const DisplayPanel = () => (
  <DisplayPanelWrapper>
    <TextHeader>Edit Preferences</TextHeader>
    <LocalizationSetting />
  </DisplayPanelWrapper>
);


export default DisplayPanel;
