import React from 'react';
import PropTypes from 'prop-types';
import {
  SettingBox,
  Topic,
  Settings,
  SettingHeader,
  SettingText,
  Dropdown,
} from './Styled';

const generateListItem = items => (
  items.map(({ id, text }) => <option key={id} value={id}>{text}</option>)
);

const LocalizationSetting = (props) => {
  const {
    user,
    updateLanguage,
    updateTimezone,
    updateCurrency,
  } = props;

  const changeLanguage = (e) => {
    const { value } = e.target;
    updateLanguage(value);
  };

  const changeTimeZone = (e) => {
    const { value } = e.target;
    updateTimezone(value);
  };

  const changeCurrency = (e) => {
    const { value } = e.target;
    updateCurrency(value);
  };

  let languageSelected = '';
  let timezoneSelected = '';
  let currenctSelected = '';
  if (user.data.preferences) {
    const { localization } = user.data.preferences;
    languageSelected = localization.language;
    timezoneSelected = localization.time_zone;
    currenctSelected = localization.currency;
  }
  return (
    <SettingBox>
      <Topic>Localization</Topic>
      <Settings>
        <SettingHeader>Language</SettingHeader>
        <Dropdown value={languageSelected} onChange={changeLanguage}>
          {user.static.languages ? generateListItem(user.static.languages) : ''}
        </Dropdown>
        <SettingText>
          Interested in helping translate Fancy ? <span className="fake-link">Let us know.</span>
        </SettingText>
        <SettingHeader>Time zone</SettingHeader>
        <Dropdown value={timezoneSelected} onChange={changeTimeZone}>
          {user.static.languages ? generateListItem(user.static.timezones) : ''}
        </Dropdown>
        <SettingHeader>Currency</SettingHeader>
        <Dropdown value={currenctSelected} onChange={changeCurrency}>
          {user.static.languages ? generateListItem(user.static.currency) : ''}
        </Dropdown>
      </Settings>
    </SettingBox>
  );
};

LocalizationSetting.propTypes = {
  user: PropTypes.object.isRequired,
  updateLanguage: PropTypes.func.isRequired,
  updateTimezone: PropTypes.func.isRequired,
  updateCurrency: PropTypes.func.isRequired,
};

export default LocalizationSetting;
