import React, { Component } from 'react';

export default class Questao02 extends Component {
    render() {
        return (
            <div>
                <h1>NOME: {this.props.nome}</h1>
                <h1>CURSO: {this.props.curso}</h1>
                <h1>CIDADE DE ORIGEM: {this.props.cidade}</h1>

            </div>
        )
    }
}