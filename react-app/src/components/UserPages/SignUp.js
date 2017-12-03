import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  PageContainer,
  Box,
  TextInput,
  MainButton,
  LinkButton,
  Text,
} from './Styled';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    comfirmPassword: '',
    error: '',
  };

  changeInputValue = (e, name) => {
    e.persist();
    this.setState(() => ({ [name]: e.target.value }));
  };

  signUp = () => {
    const { username, password, comfirmPassword } = this.state;
    if (password === comfirmPassword) {
      const invalidLength =
        username.length < 4 ||
        username.length > 20 ||
        password.length < 4 ||
        password.length > 20;

      if (invalidLength) {
        this.setState(() => ({
          error: 'Username and length must be between 4 and 20 characters',
        }));
      } else {
        this.props.signUpRequest({
          username,
          password,
        });
        this.setState(() => ({ error: '' }));
      }
    } else {
      this.setState(() => ({ error: 'Password does not match the confirm password' }));
    }
  }

  renderError = () => {
    const { user } = this.props;
    if (this.state.error !== '') {
      return <Text danger>{this.state.error}</Text>;
    }

    if (user.isError) {
      return <Text danger>{this.props.user.error}</Text>;
    }
    return '';
  }

  renderSuccess = () => {
    const shouldRenderSuccess = this.props.user.signUpSuccess;
    return shouldRenderSuccess ? <Text success>Sign up success!</Text> : '';
  }

  renderMainButton = () => {
    const { isLoading } = this.props.user;
    if (isLoading) {
      return (
        <MainButton fade>
          <i className="fa fa-spinner fa-pulse fa-fw" /> Submitting...
        </MainButton>
      );
    }
    return <MainButton onClick={this.signUp}>Submit</MainButton>;
  }

  render() {
    const { history } = this.props;
    const {
      username,
      password,
      comfirmPassword,
    } = this.state;
    return (
      <PageContainer>
        <Box>
          <div>Sign Up</div>
          <TextInput
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => this.changeInputValue(e, 'username')}
          />
          <TextInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => this.changeInputValue(e, 'password')}
          />
          <TextInput
            type="password"
            placeholder="Confirm Password"
            value={comfirmPassword}
            onChange={e => this.changeInputValue(e, 'comfirmPassword')}
          />
          {this.renderMainButton()}
          {this.renderError()}
          {this.renderSuccess()}
          <Text>
            Already have an account ?
            <LinkButton onClick={() => history.push('/signin')}>Sign In</LinkButton>
          </Text>
        </Box>
      </PageContainer>
    );
  }
}

SignUp.propTypes = {
  history: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  signUpRequest: PropTypes.func.isRequired,
};

export default SignUp;
