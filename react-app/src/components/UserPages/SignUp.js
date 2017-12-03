import React from 'react';
import {
  PageContainer,
  Box,
  TextInput,
  MainButton,
  LinkButton,
  Text,
} from './Styled';

const SignUp = () => (
  <PageContainer>
    <Box>
      <div>Sign Up</div>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" />
      <TextInput placeholder="Confirm Password" />
      <MainButton>Submit</MainButton>
      <Text>
        Already have an account ? <LinkButton>Sign In</LinkButton>
      </Text>
    </Box>
  </PageContainer>
);

export default SignUp;
