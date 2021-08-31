import { combineReducers } from 'redux';
import {COUNTER_DECREMENT, COUNTER_INCREMENT} from './ReduxActionTypes';

export const INITIAL_STATE = {
  counter: {
    value: 0,
    maxValue: 10,
    minValue: 0,
  },
};

const counterReducer = (state = INITIAL_STATE.counter, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        value: state.value === state.maxValue ? state.maxValue : state.value + 1,
      };
    case COUNTER_DECREMENT:
      return {
        ...state,
        value: state.value === state.minValue ? state.minValue : state.value - 1,
      };
    default:
      return state;
  }
};

const ReduxReducer = combineReducers({
  counter: counterReducer
});

export default ReduxReducer;
