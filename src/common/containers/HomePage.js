import { bindActionCreators } from 'redux';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as LayoutActions from '../actions/layout';

function mapStateToProps(state) {
  return {
    layout : state.layout
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LayoutActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);