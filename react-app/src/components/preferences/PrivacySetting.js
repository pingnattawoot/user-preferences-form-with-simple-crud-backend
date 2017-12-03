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

const PrivacySetting = () => (
  <SettingBox>
    <Topic>Privacy</Topic>
    <Settings>
      <SettingHeader>Profile Visibility</SettingHeader>
      <SettingText>
        Manage who can see your activity,
        things you fancy, you followers,
        people you follow or in anyone’s search results
      </SettingText>
      <RadioList>
        <li>
          <label htmlFor="pv-everyone">
            <input id="pv-everyone" type="radio" name="profile-visibility" value="everyone" defaultChecked />
            <span className="radio-text">Everyone</span>
          </label>
        </li>
        <li>
          <label htmlFor="pv-private">
            <input id="pv-private" type="radio" name="profile-visibility" value="private" />
            <span className="radio-text">
              <i className="fa fa-lock fa-fw" aria-hidden="true" />
              Private
            </span>
          </label>
        </li>

      </RadioList>

      <SettingHeader>Messages</SettingHeader>
      <SettingText>
        Control who can send you messages
      </SettingText>
      <RadioList>
        <li>
          <label htmlFor="mes-everyone">
            <input id="mes-everyone" type="radio" name="messages" value="everyone" />
            <span className="radio-text">Everyone</span>
          </label>
        </li>
        <li>
          <label htmlFor="mes-pyf">
            <input id="mes-pyf" type="radio" name="messages" value="people_you_follow" defaultChecked />
            <span className="radio-text">People you follow</span>
          </label>
        </li>
        <li>
          <label htmlFor="mes-no-one">
            <input id="mes-no-one" type="radio" name="messages" value="no_one" />
            <span className="radio-text">
              <i className="fa fa-lock fa-fw" aria-hidden="true" />
              No one
            </span>
          </label>
        </li>
      </RadioList>

      <SettingHeader>Recently viewed</SettingHeader>
      <SettingText>
        Manage your Fancy browsing history.
        <div style={{ marginTop: '8px' }}>
          <span className="fake-link">Delete all items</span>
        </div>
      </SettingText>
    </Settings>
  </SettingBox>
);

export default PrivacySetting;
