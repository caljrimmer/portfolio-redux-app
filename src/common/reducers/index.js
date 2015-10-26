import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import layout from './layout';
import { selectedReddit, postsByReddit } from './reddit';

const rootReducer = combineReducers({
  layout : layout,
  router : routerStateReducer
});

export default rootReducer;