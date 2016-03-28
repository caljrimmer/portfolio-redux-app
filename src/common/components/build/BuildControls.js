import React, { Component } from 'react';
import { createBackgroundGrid, createMovementGrid, createAssetGrid} from '../../utils/hex-create';
import _ from 'lodash';
import classnames from 'classnames';

class GameArea extends Component {

    constructor (props) {
        super(props);
        this.state = {
            selected : this.props.selected,
            area : 'backgrounds'
        }
        this.eventSelectBackground = this.eventSelectBackground.bind(this);
        this.eventSelectAsset = this.eventSelectAsset.bind(this);
        this.eventArea = this.eventArea.bind(this);
    }

    eventSelectBackground (e) {
        const selected =  _.find(this.props.backgrounds,{ id : e.target.id})
        this.setState({
            selected : selected
        })
    }

    eventSelectAsset (e) {
        const selected =  _.find(this.props.assets,{ id : e.target.id})
        this.setState({
            selected : selected
        })
    }

    eventArea (e) {
        const area = e.target.innerText.toLowerCase();
        const selected = (area === 'backgrounds') ? this.props.backgrounds[0] : this.props.assets[0];
        this.setState({
            area : area,
            selected : selected
        });
    }

    render() {

        const Backgrounds = this.props.backgrounds.map((item,i) => {
            const cname = (item.id === this.state.selected.id) ? 'selected' : '';
            return (
                <li key={i} className={cname}>
                    <div className="tile">
                        <svg>
                            <polygon onClick={this.eventSelectBackground} id={item.id} className={item.id} transform="rotate(30,10,20)" points="30,15 22.5,28 7.5,28 0,15 7.5,2 22.5,2"></polygon>
                        </svg>
                    </div>
                    <div className="info">
                        <h4>{item.name}</h4>
                        <p>
                            m : {item.movement} s : {item.movement}
                        </p>
                    </div>
                </li>
            )
        });

        const Assets = this.props.assets.map((item,i) => {
            const cname = (item.id === this.state.selected.id) ? 'selected' : '';
            return (
                <li key={i} className={cname}>
                    <div className="tile">
                        <div onClick={this.eventSelectAsset} id={item.id} className={item.id}></div>
                    </div>
                    <h4>{item.name}</h4>
                    <p>
                        m : {item.movement} a : {item.attack} d : {item.defence}
                    </p>
                </li>
            )
        });

        return (
            <div className="controls">
                <ul className={this.state.area}>
                    <li onClick={this.eventArea}>Backgrounds</li>
                    <li onClick={this.eventArea}>Assets</li>
                </ul>
                <ul className="tile-list">
                {this.state.area === 'backgrounds' &&
                    {Backgrounds}
                }
                {this.state.area === 'assets' &&
                    {Assets}
                }
                </ul>
            </div>
        );

    }
}

/**
<svg id="color-fill">
    <circle cx="25" cy="25" r="24" fill="#ccc" />
    <polygon class="hex" transform="translate(8,7) rotate(30,10,20)" points="30,15 22.5,28 7.5,28 0,15 7.5,2 22.5,2"></polygon>
</svg>
**/

export default GameArea;