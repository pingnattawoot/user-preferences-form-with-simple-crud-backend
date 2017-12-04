import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserTokenFromStorage } from '../api';
import { getUserDataRequest } from '../actions/user';

const RequireAuth = (WrappedComponent) => {
  class Auth extends React.Component {
    componentWillMount() {
      const token = getUserTokenFromStorage();
      if (!token) {
        this.props.history.push('/signin');
      }
    }

    componentDidMount() {
      const token = getUserTokenFromStorage();
      if (token) {
        this.props.getUserDataRequest();
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  Auth.propTypes = {
    history: PropTypes.object.isRequired,
    getUserDataRequest: PropTypes.func.isRequired,
  };

  return withRouter(connect(null, { getUserDataRequest })(Auth));
};

export default RequireAuth;
