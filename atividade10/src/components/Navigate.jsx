import React, { Component } from 'react'
import Card from './Card'
import './Navigate.css'

import { connect } from 'react-redux'
import mudarValor from '../store/actions/Valor'

class Navigate extends Component {

    maior() {
        const maior = (this.props.numero1 < this.props.numero2) ? this.props.numero2 : this.props.numero1
        this.props.mudarValor(maior)
    }

    multiplicacao() {
        const multiplicacao = (this.props.numero1 < 0) ? 0 : this.props.numero2 * this.props.numero1
        this.props.mudarValor(multiplicacao)
    }

    soma() {
        const soma = this.props.numero1 + this.props.numero2
        this.props.mudarValor(soma)
    }


   
    render() {
        return (
            <Card className='valor'title ='REDUX - Calculadora' blue>
                <div className='navigate'>
                <table>
                    <thead>
                        <tr>
                            <th><h5>1º número</h5></th>
                            <th><h5>2º número</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td><input value={this.props.numero1}/></td>
                            <td><input value={this.props.numero2}/></td>
                        </tr>
                    </tbody>

                </table>
                
                </div>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        soma: state.Soma.soma,
        multiplicacao: state.Multiplicacao.multiplicacao,
        maior: state.Maior.maior,
        numero1: state.Numero1.numero1,
        numero2: state.Numero2.numero2
    }
}

function mapActionCreatorToProps(dispatch){
    return {
        mudarValor(valor){
            const action = mudarValor(valor)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapActionCreatorToProps)(Navigate)