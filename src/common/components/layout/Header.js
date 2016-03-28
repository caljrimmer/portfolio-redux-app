import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
    <div className="masthead">
			<div className="container">
			  <h3 className="masthead-title">
			    <a href="/" title="Home">Mining Game</a>
			    <small>3 match with a twist</small>
			  </h3>
			</div>
		</div>
    );
  }
}

export default Header;