import './App.css';
import Counter from './Counter';
import {counterDecrement, counterIncrement} from './redux/ReduxAction';
import {connect} from 'react-redux';

const App = ({
  counterIncrement,
  counterDecrement
}) => {
  return (
    <div className="app">
      <header className="app_header">
        <span>
          React Redux Simple Example
        </span>
        <Counter/>
        <span
          className="app_action"
          onClick={() => counterIncrement()}
        >
          Add 1
        </span>
        <span
          className="app_action"
          onClick={() => counterDecrement()}
        >
          Subtract 1
        </span>
      </header>
    </div>
  );
}

export default connect(null, {counterIncrement, counterDecrement})(App);
