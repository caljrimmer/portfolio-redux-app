import request from 'axios';

export const INVALIDATE_REPOS = 'INVALIDATE_REPOS';
export const REPOS_GET = 'REPOS_GET';
export const REPOS_GET_REQUEST = 'REPOS_GET_REQUEST';
export const REPOS_GET_SUCCESS = 'REPOS_GET_SUCCESS';
export const REPOS_GET_FAILURE = 'REPOS_GET_FAILURE';


export function invalidateRepos(repos) {
  return {
    type: INVALIDATE_REPOS,
    repos
  };
}

export function fetchRepos() {
  return {
    type: REPOS_GET,
    promise: request.get(`https://api.github.com/users/caljrimmer/repos`)
  }
}

function shouldFetchRepos(state) {
  const repos = state.repos.results;
  if (!repos.length) {
    return true;
  } else if (repos.isFetching) {
    return false;
  } else {
    return repos.didInvalidate;
  }
}

export function fetchReposIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchRepos(getState())) {
      return dispatch(fetchRepos());
    }
  };
}