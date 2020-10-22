import React, { Component } from 'react'
import axios from 'axios'

export default class Edit extends Component {

    constructor(props) {
        super(props)

        this.state = { nomeDisciplina: '', curso: '', capacidade: '' }

        this.setNomeDisciplina = this.setNomeDisciplina.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setCapacidade = this.setCapacidade.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:3002/disciplinas/retrieve/'+this.props.match.params.id) 
        .then((res)=>{
            this.setState({
                nomeDisciplina:res.data.nomeDisciplina,
                curso:res.data.curso,
                capacidade:res.data.capacidade
            })
        })
        .catch(error=>console.log(error))
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
        
        const disciplinaEditada= {nomeDisciplina:this.state.nomeDisciplina, 
                                  curso:this.state.curso,
                                  capacidade:this.state.capacidade}
        axios.put('http://localhost:3002/disciplinas/update/'+this.props.match.params.id, disciplinaEditada) 
        
        .then(
            (res)=>{
                this.props.history.push('/list');    
            }
        )
        .catch(error=>console.log(error))
        
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Editar Disciplina</h3>
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
                        <input type="submit" value="Editar Disciplina" className="btn btn-primary" />
                    </div>
                </form>

            </div>
        )
    }
}