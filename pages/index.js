/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
class Tianzige extends Component {
    height = 420;
    dashed = '1px dashed #333';
    style = {
        char: {
            fontFamily: 'Kaiti TC',
            lineHeight: this.height + 'px',
            fontSize: this.height / 1.4 ,
            position: 'absolute',
            width: this.height,
            height: this.height,
            textAlign: 'center'
        },
        borderOuter: {
            width: this.height,
            height: this.height,
            position: 'relative'
        },
        border: {
            width: '80%',
            height: '80%',
            margin: '10%',
            boxSizing: 'border-box',
            border: '2px solid #000',
            position: 'relative',
            transform: 'translateY(17%)'
        },
        borderRow: {
            width: '100%',
            height: '50%',
            position: 'relative',
            boxSizing: 'border-box'
        },
        borderTL: {
            width: '50%',
            height: '100%',
            boxSizing: 'border-box',
            float: 'left',
            borderRight: this.dashed,
            borderBottom: this.dashed
        },
        borderTR: {
            width: '50%',
            height: '100%',
            boxSizing: 'border-box',
            float: 'left',
            borderLeft: this.dashed,
            borderBottom: this.dashed
        },
        borderBL: {
            width: '50%',
            height: '100%',
            boxSizing: 'border-box',
            float: 'left',
            borderTop: this.dashed,
            borderRight: this.dashed
        },
        borderBR: {
            width: '50%',
            height: '100%',
            boxSizing: 'border-box',
            float: 'left',
            borderLeft: this.dashed,
            borderTop: this.dashed
        }
    };
    render() {
        return (
            <div style={this.style.borderOuter}>
                <div style={this.style.char}>{this.props.value}</div>
                <div style={this.style.border}>
                    <div style={this.style.borderRow}>
                        <div style={this.style.borderTL}/>
                        <div style={this.style.borderTR}/>
                    </div>
                    <div style={this.style.borderRow}>
                        <div style={this.style.borderBL}/>
                        <div style={this.style.borderBR}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = { char: '永' };
    }
    render() {
        return (
            <div>
                <h1>田字格</h1>
                <p><input maxLength="1"
                          value={this.state.char}
                          onChange={(e) => this.setState({ char: e.target.value })}/>
                </p>
                <Tianzige value={this.state.char}/>
            </div>
        );
    }

}
