import React from 'react';
import { Route, Link } from 'react-router-dom';
import Counter from './containers/Counter';
import TestComponent from './components/TestComponent';

const App = () => (
  <div>
    App.js
    <Link to="/" href="/"> Home </Link>
    <Link to="/counter" href="/counter"> Counter </Link>
    <Route path="/" exact component={TestComponent} />
    <Route path="/counter" component={Counter} />
  </div>
);


export default App;
