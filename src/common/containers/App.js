import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';

import * as LayoutActions from '../actions/layout';

import Game from '../components/Game'

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
  	    <div className="wrap">
          <div className="container content">
            {!this.props.children && <Game />}
            {this.props.children}
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    layout : state.layout
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LayoutActions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
