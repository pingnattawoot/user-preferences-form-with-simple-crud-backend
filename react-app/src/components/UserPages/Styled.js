import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 32px;
  >* {
    margin: 8px;
  }
`;

const TextInput = styled.input`
  width: 220px;
  height: 32px;
  background-color: #fafafa;
  border: 1px solid #dedfe0;
  border-radius: 3px;
  text-indent: 8px;
  font-size: 12px;
  &::placeholder {
    color: #b4b8bd;
  }
`;

const MainButton = styled.button`
  color: #333;
  font-size: 12px;
  font-weight: bold;
  width: 128px;
  height: 32px;
  cursor: pointer;
  border: 1px solid #dedfe0;
  border-radius: 3px;
  &:hover {
    background-color: #42a7f4;
    color: #fff;
  }
`;

const LinkButton = styled.button`
  color: #42a7f4;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Text = styled.div`
  font-size: 12px;
`;

export {
  PageContainer,
  Box,
  TextInput,
  MainButton,
  LinkButton,
  Text,
};
