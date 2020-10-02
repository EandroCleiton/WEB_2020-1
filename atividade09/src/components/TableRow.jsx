import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import FirebaseService from '../services/FirebaseService'

export default class TableRow extends Component {

    constructor(props) {
        super(props)
        this.apagar = this.apagar.bind(this)
    }

    apagar(id, nomeDisciplina) {
        let res = window.confirm(`Deseja apagar ${nomeDisciplina}?`)
        if (res) {
            FirebaseService.delete(this.props.firebase.getFirestore(),
                (mensagem) => {
                    console.log(mensagem)
                }, id)
        }
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.disciplina.nomeDisciplina}
                </td>
                <td>
                    {this.props.disciplina.curso}
                </td>
                <td>
                    {this.props.disciplina.capacidade}
                </td>
                <td style={{ textAlign: "center" }}>
                    <Link to={"/edit/" + this.props.disciplina._id} className="btn btn-primary">Editar</Link>
                </td>
                <td style={{ textAlign: "center" }}>
                    <button onClick={() => this.apagar(this.props.disciplina._id, this.props.disciplina.nome)}
                        className="btn btn-danger">
                        Apagar
                    </button>
                </td>
            </tr>
        )
    }
}