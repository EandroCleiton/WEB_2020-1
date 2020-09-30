import React, { Component } from 'react'
import axios from 'axios'

export default class Create extends Component {

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
        axios.post('http://localhost:3002/disciplinas/register', novaDisciplina)
            .then(
                (res)=>{
                    console.log('Disciplina foi adicionada')
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
            <div style={{ marginTop: 25 }}>

                <center><h3>CRIAR</h3></center>

                <form onSubmit={this.onSubmit}>
                    
                    <div className='form-group'>
                        <label><b>NOME:</b></label>
                        <input type="text" className="form-control"
                            value={this.state.nome} onChange={this.setNome} />
                    </div>

                    <div className="form-group">
                        <label><b>CURSO:</b></label>
                        <input type="text" className="form-control"
                            value={this.state.curso} onChange={this.setCurso} />
                    </div>

                    <div className="form-group">
                        <label><b>CAPACIDADE:</b></label>
                        <input type="text" className="form-control"
                            value={this.state.capacidade} onChange={this.setCapacidade} />
                    </div>

                    <div className="form-group">
                        <center><input type="submit" value="OK" 
                            className="btn btn-primary" /></center>
                    </div>

                </form>
            </div>
        )
    }
}