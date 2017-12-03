import React from 'react';
import {
  SettingBox,
  Topic,
  Settings,
  SettingHeader,
  SettingText,
  Dropdown,
} from './Styled';

const LocalizationSetting = () => (
  <SettingBox>
    <Topic>Localization</Topic>
    <Settings>
      <SettingHeader>Language</SettingHeader>
      <Dropdown>
        <option value={1}>English</option>
        <option value={2}>Thai</option>
      </Dropdown>
      <SettingText>
        Interested in helping translate Fancy ? <span className="fake-link">Let us know.</span>
      </SettingText>
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
  </SettingBox>
);

export default LocalizationSetting;
