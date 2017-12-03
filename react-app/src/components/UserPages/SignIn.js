import React from 'react';
import {
  PageContainer,
  Box,
  TextInput,
  MainButton,
  LinkButton,
  Text,
} from './Styled';

const SignIn = () => (
  <PageContainer>
    <Box>
      <div>Sign In</div>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" />
      <MainButton>Submit</MainButton>
      <Text>
        {'Don\'t have an account ?'} <LinkButton>Sign Up</LinkButton>
      </Text>
    </Box>
  </PageContainer>
);

export default SignIn;
