import React from 'react';
import styled from 'styled-components';
import {
  // BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import RequireAuth from '../hocs/RequireAuth';
import Preferences from './Preferences';
import TestComponent from './TestComponent';
import SignIn from '../containers/UserPages/SingIn';
import SignUp from '../containers/UserPages/SignUp';

const MainPanelWrapper = styled.div`
  padding: 12px 12px 48px;
  background: #ebeced;
  min-height: 700px;
  z-index: inherit;
`;

const MainPanel = () => (
  <MainPanelWrapper>
    <Switch>
      <Route exact path="/" component={RequireAuth(Preferences)} />
      <Route path="/test" component={TestComponent} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  </MainPanelWrapper>
);

export default MainPanel;
