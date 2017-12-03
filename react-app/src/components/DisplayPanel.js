import React from 'react';
import styled from 'styled-components';
import LocalizationSetting from './preferences/LocalizationSetting';
import PrivacySetting from './preferences/PrivacySetting';
import ContentSetting from './preferences/ContentSetting';

const DisplayPanelWrapper = styled.ul`
  width: 728px;
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

const SaveButtonBox = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;

const SaveButton = styled.button`
  color: #333;
  font-size: 12px;
  font-weight: bold;
  margin-right: 20px;
  width: 128px;
  height: 32px;
  cursor: pointer;
  &:hover {
    background-color: #42a7f4;
    color: #fff;
  }
`;


const DisplayPanel = () => (
  <DisplayPanelWrapper>
    <TextHeader>Edit Preferences</TextHeader>
    <LocalizationSetting />
    <PrivacySetting />
    <ContentSetting />
    <SaveButtonBox>
      <SaveButton>Save Preferences</SaveButton>
    </SaveButtonBox>
  </DisplayPanelWrapper>
);


export default DisplayPanel;
