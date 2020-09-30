import React, { Component } from 'react'
import axios from 'axios'
import TableRow from './TableRow'


export default class List extends Component {

    constructor(props) {
        super(props)
        this.state = { disciplinas: [] }

        this.apagarElemento = this.apagarElemento.bind(this)
    }

    componentDidMount() {
           axios.get('http://localhost:3002/disciplinas/list')
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
                apagarElemento={this.apagarElemento}/>
            }
        )
    }

    apagarElemento(id) {
        let disciplinasTemp = this.state.disciplinas
        for (let i = 0; i < disciplinasTemp.length; i++) {
            if (disciplinasTemp[i]._id === id) {
                disciplinasTemp.splice(i, 1)
            }
        }
        this.setState({ disciplinas: disciplinasTemp })
    }
    render() {
        return (
            <div>
                <center><h3>DISCIPLINAS</h3></center>
                <table className="table table-striped" style={{ marginTop: 25 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>CURSO</th>
                            <th>CAPACIDADE</th>
                            <th colSpan="2" style={{ textAlign: "center" }}>OPÇÕES</th>
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