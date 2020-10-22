import React, { Component } from 'react'
import axios from 'axios'
import Card from './commons/RestrictCard'
export default class Create extends Component {

    constructor(props) {
        super(props)

        this.state = { nomeDisciplina: '', curso: '', capacidade: '' }

        this.setNomeDisciplina = this.setNomeDisciplina.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setCapacidade = this.setCapacidade.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setNomeDisciplina(e) {
        this.setState({ nomeDisciplina: e.target.value })
    }
    
    setCurso(e) {
        this.setState({ curso: e.target.value })
    }

    setCapacidade(e) {
        this.setState({ capacidade: e.target.value })
    }

    onSubmit(e){
        e.preventDefault()

        const novaDisciplina = {nomeDisciplina:this.state.nomeDisciplina, 
                               curso:this.state.curso,
                               capacidade:this.state.capacidade}

        axios.post('http://localhost:3002/disciplinas/register',novaDisciplina)
        .then(
            (res)=>{
                console.log('Disciplina '+res.data._id+' inserida com sucesso.')    
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )

        this.setState({ nomeDisciplina: '', curso: '', capacidade: '' })
    }

    render() {
        return (
            <Card title='Conteúdo A' history={this.props.history}>
            
                <h3>Criar Disciplina</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Nome da disciplina: </label>
                        <input type="text" className="form-control" 
                        value={this.state.nomeDisciplina} onChange={this.setNomeDisciplina}/>
                    </div>
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text" className="form-control" 
                        value={this.state.curso} onChange={this.setCurso}/>
                    </div>
                    <div className="form-group">
                        <label>Capacidade: </label>
                        <input type="text" className="form-control" 
                        value={this.state.capacidade} onChange={this.setCapacidade}/>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Criar Disciplinas" className="btn btn-primary" />
                    </div>
                </form>

            </Card>
        )
    }
}

