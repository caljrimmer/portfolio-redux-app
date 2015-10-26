import React, { Component } from 'react';
import { getPortfolio } from '../api/portfolio';
import classNames from 'classnames';

class Portfolio extends Component {

  render() {

  	const portfolio = getPortfolio();
	const RoleRows = (roles) => {
		return roles.map((role) => {
			return (
				<div key={role.title} className="role_wrapper clearfix">
					<p className="role">Role</p>
					<p className="role_title">{role.title}<br />
					<span className="role_skills">{role.skills}</span></p>
				</div>
			)
		});
	}

    const PortfolioRows = portfolio.map((row) => {
    	const classname = classNames('portfolio_item','clearfix',row.classname);
        return (
            <div key={row.title} className={classname}>
				<h2><a href={row.link} target="_blank">(visit site)</a> {row.title}</h2>
				{RoleRows(row.roles)}
			</div>
        )
    });

    return (
        <div className="posts">
        	{PortfolioRows}
        </div>
    );

  }
}

export default Portfolio;