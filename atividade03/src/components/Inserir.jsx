import React, { Component } from 'react'
import axios from 'axios'

export default class Inserir extends Component {

    constructor(props) {
        super(props)

        this.state = { nome: '', curso: '', capacidade: '' }

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setCapacidade = this.setCapacidade.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setNome(e) {
        this.setState({nome:e.target.value})
    }

    setCurso(e) {
        this.setState({curso:e.target.value})
    }

    setCapacidade(e) {
        this.setState({capacidade:e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()


        const novaDisciplina = {
            nome: this.state.nome,
            curso: this.state.curso,
            capacidade: this.state.capacidade
        }
        axios.post('http://localhost:3001/disciplinas', novaDisciplina)
            .then(
                (res)=>{
                    console.log('Disciplina criada!')
                }
            )
            .catch(
                (error)=>{
                    console.log(error)
                }
            )
            

        this.setState({nome:'',curso:'',capacidade:''})

    }
    render() {
        return (
            <div style={{ marginTop: 10,color: '#1F25BF'}}>

                <h4><i><b>Insira os seguintes dados para criar a disciplina:</b></i></h4><p></p>

                <form onSubmit={this.onSubmit}>
                    
                    <div className='form-group'>
                        <label><b>Disciplina </b></label>
                        <input type="text" className="form-control"
                            value={this.state.nome} onChange={this.setNome} />
                    </div>

                    <div className="form-group">
                        <label><b>Curso </b></label>
                        <input type="text" className="form-control"
                            value={this.state.curso} onChange={this.setCurso} />
                    </div>

                    <div className="form-group">
                        <label><b>Capacidade </b></label>
                        <input type="text" className="form-control"
                            value={this.state.capacidade} onChange={this.setCapacidade} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Criar" 
                            className="btn btn-primary" />
                    </div>

                </form>
            </div>
        )
    }
}