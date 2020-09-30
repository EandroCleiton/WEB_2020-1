import React, { Component } from 'react'
import axios from 'axios'

export default class Edit extends Component {

    constructor(props) {
        super(props)
        this.state = { nome: '', curso: '', capacidade: '' }

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setCapacidade = this.setCapacidade.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:3002/disciplinas/retrieve/' + this.props.match.params.id)
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
        axios.put('http://localhost:3002/disciplinas/update/' + this.props.match.params.id, disciplinaAtualizada)
            .then(
                res => {
                    this.props.history.push('/list');
                }
            )
            .catch(error => console.log(error))
    }

    
    render() {
        return (
            <div style={{ marginTop: 25 }}>
                <center><h3>EDITAR</h3></center>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label><b>NOME:</b></label>
                        <input type="text" className="form-control"
                            value={this.state.nome} onChange={this.setNome} />
                    </div>

                    <div className="form-group">
                        <label><b>CURSO</b></label>
                        <input type="text" className="form-control"
                            value={this.state.curso} onChange={this.setCurso} />
                    </div>

                    <div className="form-group">
                        <label><b>CAPACIDADE</b></label>
                        <input type="text" className="form-control"
                            value={this.state.capacidade} onChange={this.setCapacidade} />
                    </div>

                    <div className="form-group">
                       <center> <input type="submit" value="OK" className="btn btn-primary" /></center> 
                    </div>
                </form>
            </div>
        )
    }
}