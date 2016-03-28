import React, { Component } from 'react';
import BuildArea from './build/BuildArea';
import BuildControls from './build/BuildControls';
import backgrounds from '../utils/hex-backgrounds';
import assets from '../utils/hex-assets'

class Build extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
        <div id="game">
            <BuildArea backgrounds={backgrounds} assets={assets} />
            <BuildControls backgrounds={backgrounds} assets={assets} selected={backgrounds[0]} />
        </div>
    );
  }
}

export default Build;