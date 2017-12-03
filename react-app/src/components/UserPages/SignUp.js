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

const SignUp = ({ history, requestSignUp }) => (
  <PageContainer>
    <Box>
      <div>Sign Up</div>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" />
      <TextInput placeholder="Confirm Password" />
      <MainButton onClick={requestSignUp}>Submit</MainButton>
      <Text>
        Already have an account ?
        <LinkButton onClick={() => history.push('/signin')}>Sign In</LinkButton>
      </Text>
    </Box>
  </PageContainer>
);

SignUp.propTypes = {
  history: PropTypes.object.isRequired,
  requestSignUp: PropTypes.func.isRequired,
};

export default SignUp;
