import React, { Component } from 'react';
import { createGrid} from '../../utils/hex-create';
import _ from 'lodash';

class BuildArea extends Component {

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
                width: 1028,
                height: 768,
                radius: 22
            }
        }

        createGrid(_.merge(opts,{
            target: '#grid',
            isBuilder: true
        }));

    }

    render() {

        return (
            <div id="grid" className="layers"></div>
        );

    }
}

export default BuildArea;