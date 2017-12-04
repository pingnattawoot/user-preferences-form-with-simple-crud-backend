/* eslint max-len: 0 */
import React from 'react';
import {
  SettingBox,
  Topic,
  Settings,
  SettingHeader,
  SettingText,
  RadioList,
} from './Styled';

const ContentSetting = () => (
  <SettingBox>
    <Topic>Contents</Topic>
    <Settings>
      <SettingHeader>Category Lists</SettingHeader>
      <SettingText>
        {'Automatically add Fancy\'s items to the Category list'}
      </SettingText>
      <RadioList>
        <li>
          <label htmlFor="cat-enable">
            <input id="cat-enable" type="radio" name="category-list" value="enable" defaultChecked />
            <span className="radio-text">Everyone</span>
          </label>
        </li>
        <li>
          <label htmlFor="cat-disable">
            <input id="cat-disable" type="radio" name="category-list" value="disable" />
            <span className="radio-text">Private</span>
          </label>
        </li>
      </RadioList>
    </Settings>
  </SettingBox>
);

export default ContentSetting;
