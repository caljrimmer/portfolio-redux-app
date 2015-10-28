import React, { PropTypes, Component } from 'react';

export default class Repos extends Component {
  render () {
    return (
      <div>
        {this.props.results.map((repo, i) =>
          <div className="repo-item" key={i}> 
            <a href={repo.html_url}>{repo.name}</a><br/>
            {repo.description}
          </div>
        )}
      </div>
    );
  }
}

Repos.propTypes = {
  results: PropTypes.array.isRequired
};