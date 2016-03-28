import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';

import * as LayoutActions from '../actions/layout';

import Home from '../components/Home'
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'

class App extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    const { layout, toggleSidebar } = this.props;
    const { sidebarOpen } = layout;
    const layoutClass = classNames({open : sidebarOpen});

    return (
      <div className={layoutClass}>
        <Sidebar layout={layout} toggleSidebar={toggleSidebar} />
  	    <div className="wrap">
          <Header />
          <div className="container content">
            {!this.props.children && <Home layout={layout} toggleSidebar={toggleSidebar} />}
            {this.props.children}
          </div>
        </div>
        <label className="sidebar-toggle" onClick={this.eventToggleSidebar}></label>
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
