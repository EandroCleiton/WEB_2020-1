import React, { Component } from 'react';
import Card from './Card'
import { connect  } from 'react-redux'

class Soma extends Component {
    render() {
        return (
            <Card title='SOMA' green>
                <h5>
                    {this.props.numero1 + this.props.numero2}
                </h5>
            </Card>
        )
    }
}

function mapStateToProps(state){
    return{
        numero1: state.Numero1.numero1,
        numero2: state.Numero2.numero2,
        soma: state.Soma.soma
    }
}

export default connect(mapStateToProps)(Soma)