import React from 'react';
import {getCounter} from './redux/ReduxSelector';
import {connect} from 'react-redux';
import './Counter.css';

const Counter = ({
  counter
}) => {
  return (
    <span
      className="app_counter"
    >
      {counter}
    </span>
  )
}

const mapStateToProps = state => ({
  counter: getCounter(state),
});

export default connect(mapStateToProps)(Counter);