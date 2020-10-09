import React, {Component} from 'react';
import Card from './Card'
import { connect  } from 'react-redux'

class Multiplicacao extends Component{
    render(){
        return (
            <Card title='MULTIPLICAÇÃO' red>
                <div>
                    <h5>
                        {this.props.numero1 * this.props.numero2}
                    </h5>
                </div>
            </Card>
        )
    }
}

function mapStateToProps(state){
    return{
        numero1: state.Numero1.numero1,
        numero2: state.Numero2.numero2,
        multiplicacao: state.Multiplicacao.multiplicacao
    }
}

export default connect(mapStateToProps)(Multiplicacao)