import React, { Component } from 'react'
import Axios from 'axios'

import TableRow from './TableRow'


export default class Listar extends Component {

    constructor(props) {
        super(props)
        this.state = { disciplinas: [] }

        this.apagarDisciplina = this.apagarDisciplina.bind(this)
    }

    componentDidMount() {
        Axios.get('http://localhost:3001/disciplinas')
            .then(
                (res) => {
                    this.setState({ disciplinas: res.data })
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }


    montarTabela() {
        if (!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (disciplina, i) => {
                return <TableRow disciplina={disciplina}
                 key={i} 
                apagarDisciplina={this.apagarDisciplina}/>
            }
        )
    }

    apagarDisciplina(id) {
        let disciplinasNum = this.state.disciplinas
        for (let i = 0; i < disciplinasNum.length; i++) {
            if (disciplinasNum[i].id === id) {
                disciplinasNum.splice(i, 1)
            }
        }
        this.setState({ disciplinas: disciplinasNum })
    }
    render() {
        return (
            <div>
                <table className="table table-striped" style={{ marginTop: 55 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>CURSO</th>
                            <th>CAPACIDADE</th>
                            <th colSpan="2" style={{ textAlign: "center" }}>AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>
                </table>
            </div>

        )
    }
}