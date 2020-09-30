import React, { Component } from 'react'
import axios from 'axios'

export default class Editar extends Component {

    constructor(props) {
        super(props)
        this.state = { nome: '', curso: '', capacidade: '' }

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setCapacidade = this.setCapacidade.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:3001/disciplinas/' + this.props.match.params.id)
            .then(
                (res) => {
                    this.setState(
                        {
                            nome: res.data.nome,
                            curso: res.data.curso,
                            capacidade: res.data.capacidade
                        }
                    )
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }

    setNome(e){
        this.setState({nome:e.target.value})
    }

    setCurso(e){
        this.setState({curso:e.target.value})
    }
    
    setCapacidade(e){
        this.setState({capacidade:e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()
        const disciplinaAtualizada =
        {
            nome: this.state.nome,
            curso: this.state.curso,
            capacidade: this.state.capacidade
        }
        axios.put('http://localhost:3001/disciplinas/' + this.props.match.params.id, disciplinaAtualizada)
            .then(
                res => {
                    this.props.history.push('/listar');
                }
            )
            .catch(error => console.log(error))
    }

    
    render() {
        return (
            <div style={{ marginTop: 12 }}>
                <h3>EDITAR</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>NOME: </label>
                        <input type="text" className="form-control"
                            value={this.state.nome} onChange={this.setNome} />
                    </div>

                    <div className="form-group">
                        <label>CURSO: </label>
                        <input type="text" className="form-control"
                            value={this.state.curso} onChange={this.setCurso} />
                    </div>

                    <div className="form-group">
                        <label>CAPACIDADE: </label>
                        <input type="text" className="form-control"
                            value={this.state.capacidade} onChange={this.setCapacidade} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="OK" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}