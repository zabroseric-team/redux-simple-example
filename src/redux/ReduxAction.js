import {COUNTER_DECREMENT, COUNTER_INCREMENT} from './ReduxActionTypes';

export const counterIncrement = () => ({
  type: COUNTER_INCREMENT,
});

export const counterDecrement = () => ({
  type: COUNTER_DECREMENT,
});