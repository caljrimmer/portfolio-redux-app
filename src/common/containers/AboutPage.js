import { bindActionCreators } from 'redux';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import About from '../components/About';
import * as AboutActions from '../actions/about';

//Data that needs to be called before rendering the component
//This is used for server side rending via the fetchComponentDataBeforeRending() method
About.need = [
  AboutActions.fetchRepos
]

function mapStateToProps(state) {
  const {
    isFetching,
    lastUpdated,
    error,
    results
  } = state.repos || {
    isFetching: true,
    error:false,
    results: []
  };
  return {
    isFetching,
    lastUpdated,
    error,
    results
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AboutActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(About);