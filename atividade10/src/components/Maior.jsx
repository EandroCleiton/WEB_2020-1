import React, { Component } from 'react';
import Card from './Card'
import { connect  } from 'react-redux'

class Maior extends Component {
    render() {
        return (
            <Card title='MAIOR' yellow>
                <h5>
                    {(this.props.numero1 < this.props.numero2) ? this.props.numero2 : this.props.numero1}
                </h5>
            </Card>
        )
    }
}

function mapStateToProps(state){
    return{
        numero1: state.Numero1.numero1,
        numero2: state.Numero2.numero2,
        maior: state.Maior.maior
    }
}

export default connect(mapStateToProps)(Maior)