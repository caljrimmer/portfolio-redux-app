import {
  INVALIDATE_REPOS, REPOS_GET_REQUEST, REPOS_GET_SUCCESS, REPOS_GET_FAILURE
} from '../actions/about';

export function reposByUser(state = {
  error: {},
  isFetching: false,
  didInvalidate: false,
  results: []
}, action) {
  switch (action.type) {
    case INVALIDATE_REPOS:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REPOS_GET_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case REPOS_GET_SUCCESS:
      let data = [];
      if(action.req && action.req.data){
        data = action.req.data.sort((a,b) => {
          return new Date(b.pushed_at) - new Date(a.pushed_at);
        });
      }
      return Object.assign({}, state, {
          isFetching: false,
          results: data,
          lastUpdated: new Date()
      });
    case REPOS_GET_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error : {
          status: action.error.status,
          statusText : action.error.statusText
        }
      });
    default:
      return state;
  }
}