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

const SignUp = ({ history }) => (
  <PageContainer>
    <Box>
      <div>Sign Up</div>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" />
      <TextInput placeholder="Confirm Password" />
      <MainButton>Submit</MainButton>
      <Text>
        Already have an account ?
        <LinkButton onClick={() => history.push('/signin')}>Sign In</LinkButton>
      </Text>
    </Box>
  </PageContainer>
);

SignUp.propTypes = {
  history: PropTypes.object.isRequired,
};

export default SignUp;
