import React from 'react';
import PropTypes from 'prop-types';
import {
  PageContainer,
  Box,
  TextInput,
  MainButton,
  LinkButton,
  Text,
} from './Styled';

const SignIn = ({ history }) => (
  <PageContainer>
    <Box>
      <div>Sign In</div>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" />
      <MainButton>Submit</MainButton>
      <Text>
        {'Don\'t have an account ?'}
        <LinkButton onClick={() => history.push('/signup')}>Sign Up</LinkButton>
      </Text>
    </Box>
  </PageContainer>
);

SignIn.propTypes = {
  history: PropTypes.object.isRequired,
};

export default SignIn;
