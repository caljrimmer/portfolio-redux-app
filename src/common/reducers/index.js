import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import layout from './layout';

const rootReducer = combineReducers({
  layout : layout,
  router : routerStateReducer
});

export default rootReducer;