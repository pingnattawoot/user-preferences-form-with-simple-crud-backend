import styled from 'styled-components';

const SettingBox = styled.div`
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
  max-width: 500px;
`;

const SettingHeader = styled.div`
  font-weight: bold;
`;

const SettingText = styled.div`
  margin: 4px 0px 12px;
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
`;

const RadioList = styled.ul`
  padding: 0 0 32px;
  list-style: none;
  display: flex;
  align-items: flex-start;
  >li {
    margin-right: 32px;
    span.radio-text {
      margin-left: 8px;
    }
  }
`;

export {
  SettingBox,
  Topic,
  Settings,
  SettingHeader,
  SettingText,
  Dropdown,
  RadioList,
};
