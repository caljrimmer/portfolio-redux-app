import React, { Component } from 'react';
import GameArea from './game/GameArea';

class Game extends Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
        <div id="game">
            <GameArea />
        </div>
    );
  }
}

export default Game;