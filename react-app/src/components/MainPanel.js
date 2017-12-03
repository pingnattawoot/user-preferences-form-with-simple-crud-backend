import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Preferences from './Preferences';
import TestComponent from './TestComponent';
import SignIn from './UserPages/SignIn';
import SignUp from './UserPages/SignUp';

const MainPanelWrapper = styled.div`
  padding: 12px 12px 48px;
  background: #ebeced;
  min-height: 700px;
  z-index: inherit;
`;

const MainPanel = () => (
  <MainPanelWrapper>
    <Router>
      <div>
        <Route exact path="/" component={Preferences} />
        <Route path="/test" component={TestComponent} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  </MainPanelWrapper>
);

export default MainPanel;
