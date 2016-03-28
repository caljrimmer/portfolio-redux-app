import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import layout from './layout';
import { reposByUser } from './about';

const rootReducer = combineReducers({
  layout : layout,
  repos : reposByUser,
  router : routerStateReducer
});

export default rootReducer;