import React, { Component } from 'react';
import classname from 'classnames';

class GameTile extends Component {

    constructor(props){
        super(props);
        this.tile = props.tile;
        this.key = props.key;
        this.generateMineralSize = this.generateMineralSize.bind(this);
    }

    generateMineralSize () {
        let ratio = this.tile.conc;
        let conc = 6 + Math.ceil(ratio * 8);
        if (conc % 2 !== 0) {
            --conc; 
        }
        return conc;
    }

    render() {
        const cname = classname('hexagon', this.tile.type);
        const size = this.generateMineralSize()
        var divStyle = {
            width: size + 'px',
            height: size + 'px'
        };
        return (
            <div key={this.key} className={cname}>
                <div style={divStyle} className="mineral"></div>
            </div>
        );
    }
}

export default GameTile;