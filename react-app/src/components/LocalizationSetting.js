import React from 'react';
import styled from 'styled-components';

const LocalizationSettingWrapper = styled.div`
  color: #333;
  font-size: 12px;
  padding: 32px 0px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: flex-start;
`;

const Topic = styled.div`
  font-size: 14px;
  width: 180px;
  padding: 0 16px;
`;

const Settings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SettingHeader = styled.div`
  font-weight: bold;
`;

const SettingText = styled.div`
  margin-bottom: 12px;
  color: #b7bac1;
  font-size: 12px;
  .fake-link {
    color: #5f89bd;
    cursor: pointer;
  }
`;

const Dropdown = styled.select`
  margin: 8px 0px;
  width: 320px;
  height: 32px;
  border-radius: 0px;
  border: 1px solid #d1d5d7;
  background: #f8f8f8;
  color: #333;
  -webkit-border-radius: 0px;
`;

const LocalizationSetting = () => (
  <LocalizationSettingWrapper>
    <Topic>Localization</Topic>
    <Settings>
      <SettingHeader>Language</SettingHeader>
      <Dropdown>
        <option value={1}>English</option>
        <option value={2}>Thai</option>
      </Dropdown>
      <div>
        <SettingText>
          Interested in helping translate Fancy ? <span className="fake-link">Let us know.</span>
        </SettingText>
      </div>
      <SettingHeader>Time zone</SettingHeader>
      <Dropdown>
        <option value={1}>(UTC+00:00) UTC</option>
        <option value={2}>Thai</option>
      </Dropdown>
      <SettingHeader>Currency</SettingHeader>
      <Dropdown>
        <option value={1}>U.S. dollars($)</option>
        <option value={2}>Thai</option>
      </Dropdown>
    </Settings>
  </LocalizationSettingWrapper>
);

export default LocalizationSetting;
