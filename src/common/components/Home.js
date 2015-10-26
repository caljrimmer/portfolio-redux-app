import React, { Component } from 'react';

class Home extends Component {

  render() {
    return (

      	<div className="posts">
  
  			<div className="post banner">
			    <h1 className="post-title">I build <em>scalable</em>, <em>maintainable</em> and <em>secure</em> enterprise web applications.</h1>
    			<p>for <em>agencies</em>, <em>bluechips</em>, <em>start-ups</em> and sometimes, <em>myself</em>.</p>

			</div>

  
		  	<div className="post clearfix">

				<h2>Technologies I build with:</h2>

				<div className="skill-item clearfix">
					<h4>Client Side JS</h4>
					<ul className="">
						<li><em>Backbone</em></li>
						<li><em><b>*</b><b>*</b>React</em>
							<ul>
								<li><em><b>*</b>Redux</em></li>
								<li><em>Flux</em></li>
							</ul>
						</li>
						<li><em>D3</em></li>
					</ul>
				</div>


				<div className="skill-item clearfix">
					<h4>Server Side JS</h4>
					<ul>
						<li><em>MongoDB</em></li>
						<li><em><b>*</b>Node</em>
							<ul>
								<li><em><b>*</b>Express</em></li>
								<li><em>Hapi</em></li>
							</ul>
						</li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Testing</h4>
					<ul>
						<li><em>Jasmine</em></li>
						<li><em>Karma</em></li>
						<li><em>Protractor</em></li>
						<li><em>Jest</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Deployment</h4>
					<ul className="clearfix">
						<li><em><b>*</b>Nginx</em></li>
						<li><em><b>*</b>Webpack</em></li>
						<li><em>Gulp</em></li>
						<li><em>Grunt</em></li>
					</ul>
				</div>

				<div className="exclaimation">
					<em><b>*</b> This site is built with these technologies. View the <a href="https://github.com/caljrimmer/portfolio-redux-app">github repo here</a>.</em><br/>
					<em><b>**</b> Yep I know React can be used on the server side to. This site is also Isomorphical rendered.</em>
				</div>

  			</div>


  			<div className="post clearfix">

				<h2>Companies I have worked with:</h2>

				<ul className="clients">
					<li className="goldmans-logo">Goldman Sachs</li>
					<li className="orange-logo">Orange</li>
					<li className="tesco-logo">Tesco</li>
					<li className="timeout-logo">Timeout</li>
					<li className="wiley-logo">John Wiley and Sons</li>
					<li className="covestor-logo">Covestor</li>
					<li className="shipserv-logo">Shipserv</li>
				</ul>

			</div>

  		</div>
  
    );
  }
}

export default Home;