import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Repos from './about/Repos';

import Loader from './layout/Loader';
import Banner from './layout/Banner';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReposIfNeeded();
  }

  render () {
    const { results, isFetching, lastUpdated, error } = this.props;
    return (
      <div>

      		<Banner />

      	  <div className="about">

      	  	<h3>About Me</h3>

      	  	<p>I have been developing web sites for over 15 years. Over the years, I have adopted, mastered and moved on from many languages, frameworks and architectures. I currently focus on Javascript heavy web application development.</p> 

      	  	<p>I created my first start-up in 2004 which raised £30K pounds investment which sold custom built software to companies like News International, NHS and Guardian.</p>

      	  	<p>In 2007, I was the CTO of <a href="https://en.wikipedia.org/wiki/MyFootballClub" target="_blank">My Football Club</a>. MyFC crowdsourced over £1.5 Million to buy a British football club. In the following year, we got to Wembley and won the FA Trophy.</p>

      	  	<p>Over the years, I have developed web apps for start-ups (<a href="http://www.covestor.com" target="_blank">Covestor</a>, <a href="https://www.isubscribe.co.uk" target="_blank">iSubscribe</a>, <a href="http://www.shipserv.com/" target="_blank">Shipserv</a>), for multi-national bluechip companies (<a href="http://www.goldmansachs.com" target="_blank">Goldman Sachs</a>, <a href="http://www.tesco.com" target="_blank">Tesco</a>, <a href="http://www.timeout.com" target="_blank">Timeout</a>, <a href="http://www.wiley.com" target="_blank">John Wiley and Sons</a>) and created my own companies (<a href="http://www.pwul.net" target="_blank">PWUL</a>, <a href="http://www.muffleit.com/" target="_blank">Muffle</a>, <a href="http://pencil.training" target="_blank">Pencil Training</a>)</p>

      	  	<h3>About Site</h3>

      	  	<p>This site is a single page web app built with React and Redux. It is Isomorphic (all the code renders on the server and well as the browser) which has the advantage of initially rendering quicker and being indexed by search engines.</p>
      	  	<p>I built the site as a simple example of what can be built with React and Redux. You can get the code base forfrom <a href="https://github.com/caljrimmer/portfolio-redux-app">my github repo</a>.</p>
      	  	<p>Feel free to use this sites code for whatever you want. I hope it inspires you to build something awesome or learn something new</p>

	      </div>

	      <div className="repos">
	      	<h3><a href="https://github.com/caljrimmer?tab=repositories" target="_blank">My GitHub</a> Repos</h3>
	        {isFetching && results.length === 0 &&
	          	<Loader />
	        }
	        {!isFetching && error && results.length === 0 &&
	          <h3 className="post-error">There has been an Error</h3>
	        }
	        {!isFetching && !error && results.length === 0 &&
	          <h3>Empty</h3>
	        }
	        {results.length > 0 &&
	          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
	            <Repos results={results} />
	          </div>
	        }
	      </div>

      </div>
    );
  }
}

About.propTypes = {
  results: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default About;