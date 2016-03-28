import React, { Component } from 'react';

class GameArea extends Component {

    constructor (props) {
        super(props);
    }

    componentDidMount () {
        var opts;
        if (window.innerWidth >= 2048) {
            opts = {
                width: 2048,
                height: 1536,
                radius: 40
            }
        } else {
            opts = {
                width: 1024,
                height: 768,
                radius: 20
            }
        }
        opts.width = window.innerWidth;
        opts.height = window.innerHeight;
        opts.target = '#grid-cube';
        opts.isBuilder = true;
    }

    render() {

        return (
            <div id="grid-cube"></div>
        );

    }
}

export default GameArea;