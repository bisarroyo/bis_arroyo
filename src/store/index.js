import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';

import { reducer } from '../reducer';
import initialState from '../../initialState.json';

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(ReduxThunk),
);
