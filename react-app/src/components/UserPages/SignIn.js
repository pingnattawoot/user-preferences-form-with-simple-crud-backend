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

class SignIn extends Component {
  state = {
    username: '',
    password: '',
    // error: '',
  };

  changeInputValue = (e, name) => {
    e.persist();
    this.setState(() => ({ [name]: e.target.value }));
  };


  signIn = () => {
    const { username, password } = this.state;
    const invalidLength = username.length === 0 || password.length === 0;

    if (invalidLength) {
      this.setState(() => ({
        error: 'Please fill username and password',
      }));
    } else {
      this.props.signInRequest({
        username,
        password,
      });
      this.setState(() => ({ error: '' }));
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.signIn();
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
    if (this.props.user.signInSuccess) {
      this.props.history.push('/');
    }
    return '';
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
    return <MainButton onClick={this.signIn}>Submit</MainButton>;
  }

  render() {
    const { username, password } = this.state;
    const { history } = this.props;
    return (
      <PageContainer>
        <Box>
          <div>Sign In</div>
          <TextInput
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => this.changeInputValue(e, 'username')}
            onKeyUp={e => this.handleKeyPress(e)}
          />
          <TextInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => this.changeInputValue(e, 'password')}
            onKeyUp={e => this.handleKeyPress(e)}
          />
          {this.renderMainButton()}
          {this.renderError()}
          {this.renderSuccess()}
          <Text>
            {'Don\'t have an account ?'}
            <LinkButton onClick={() => history.push('/signup')}>Sign Up</LinkButton>
          </Text>
        </Box>
      </PageContainer>
    );
  }
}

SignIn.propTypes = {
  history: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  signInRequest: PropTypes.func.isRequired,
};

export default SignIn;
