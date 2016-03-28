import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class Sidebar extends Component {

  constructor(props){
	super(props);
	this.eventCloseSidebar = this.eventCloseSidebar.bind(this)
  }

  eventCloseSidebar (e) {
  	this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

    	<div className="sidebar">

		  <div className="sidebar-item sidebar-footer">
		    <p>An exercise in using React and Redux to build a 3-match mining game</p>
		  </div>

		  <nav className="sidebar-nav">
		    <Link to="/home" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Home</Link>
		    <Link to="/portfolio" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">My Portfolio</Link>
		    <Link to="/services" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">My Services</Link>
		    <Link to="/about" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">About</Link>
		  </nav>

		  <div className="sidebar-item sidebar-footer">

		    <p>
				Visit <a href="https://github.com/caljrimmer">My GitHub Repo</a><br/>
				Visit <a href="https://www.linkedin.com/in/callumrimmer">My Linkedin</a><br/>
				Visit <a href="https://twitter.com/caljrimmer">My Twitter</a><br/>
		    </p>

		  </div>

		</div>
    );
  }
}

export default Sidebar;