import React, { Component } from 'react';

export default class PropsFilho extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}