/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
class Tianzige extends Component {
    prepareStyle(props) {
        const { height } = props;
        const dashed = '1px dashed #333';
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
                clear: 'both',
                display: 'inline-block'
            },
            border: {
                width: '100%',
                height: '100%',
                boxSizing: 'border-box',
                border: '2px solid #000',
                position: 'relative'
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
                borderRight: dashed,
                borderBottom: dashed
            },
            borderTR: {
                width: '50%',
                height: '100%',
                boxSizing: 'border-box',
                float: 'left',
                borderLeft: dashed,
                borderBottom: dashed
            },
            borderBL: {
                width: '50%',
                height: '100%',
                boxSizing: 'border-box',
                float: 'left',
                borderTop: dashed,
                borderRight: dashed
            },
            borderBR: {
                width: '50%',
                height: '100%',
                boxSizing: 'border-box',
                float: 'left',
                borderLeft: dashed,
                borderTop: dashed
            }
        };
    }
    render() {
        this.prepareStyle(this.props);
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
