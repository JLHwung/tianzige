/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
class Tianzige extends Component {
    prepareStyle(props) {
        const { height } = props;
        this.style = {
            char: {
                fontFamily: 'Kaiti TC',
                lineHeight: height / 1.15 + 'px',
                fontSize: height / 1.15 ,
                position: 'absolute',
                width: height,
                height: height,
                textAlign: 'center',
                overflowY: 'hidden'
            },
            borderOuter: {
                width: height,
                height: height,
                position: 'relative'
            }
        };
    }
    render() {
        this.prepareStyle(this.props);
        return (
            <div style={this.style.borderOuter}>
                <div style={this.style.char}>{this.props.value}</div>
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <rect x="0" y="0" width="100%" height="100%" stroke="black"
                          fill="transparent" strokeWidth="1%"/>
                    <line x1="50%" y1="0" x2="50%" y2="100%" stroke="black"
                          strokeWidth="0.5%" strokeDasharray="3,3"/>
                    <line x1="0" y1="50%" x2="100%" y2="50%" stroke="black"
                          strokeWidth="0.5%" strokeDasharray="3,3"/>
                </svg>
            </div>
        )
    }
}
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = { char: '永', height: 400 };
    }
    render() {
        return (
            <div>
                <h1>田字格</h1>
                <div style={{ display: 'flex', marginBottom: '1vh' }}>
                    <input style={{ zIndex: 999, flexBasis: 300, boxSizing: 'border-box' }}
                          value={this.state.char}
                          onChange={(e) => this.setState({ char: e.target.value })}/>
                    <input style={{ flexBasis: 500, boxSizing: 'border-box' }}
                           value={this.state.height} type="range" min="100" max="500"
                           onChange={(e) => this.setState({ height: e.target.value })}/>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    this.state.char.split('').map((v, k) =>
                    <div style={{ flexBasis: this.state.height, height: this.state.height }}>
                        <Tianzige value={v} key={k} height={this.state.height} />
                    </div>
                    )
                }
                </div>
            </div>
        );
    }

}
