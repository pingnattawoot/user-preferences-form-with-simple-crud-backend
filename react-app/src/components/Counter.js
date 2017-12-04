import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => (
  <div>
    Counter {props.counter}
    <button onClick={props.increment}>increment</button>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

export default Counter;
