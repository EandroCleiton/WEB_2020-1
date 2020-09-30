import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class PropsFilho extends Component {
    render() {
        return (
            <div className='card'>
                {this.props.children}
            </div>
        )
    }
}