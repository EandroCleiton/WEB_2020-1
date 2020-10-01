import React, { Component } from 'react'
import axios from 'axios'

export default class Edit extends Component {

    constructor(props) {
        super(props)

        this.state = { disciplina: '', curso: '', capacidade: '' }

        this.setDisciplina = this.setDisciplina.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setCapacidade = this.setCapacidade.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
       
        axios.get('http://localhost:3002/disciplinas/retrieve/'+this.props.match.params.id) 
        
        .then((res)=>{
          
            this.setState({
                disciplina:res.data.disciplina,
                curso:res.data.curso,
                capacidade:res.data.capacidade
            })
        })
        .catch(error=>console.log(error))
    }

    setDisciplina(e) {
        this.setState({ disciplina: e.target.value })
    }
    
    setCurso(e) {
        this.setState({ curso: e.target.value })
    }

    setCapacidade(e) {
        this.setState({ capacidade: e.target.value })
    }

    onSubmit(e){
        e.preventDefault()
        
        const disciplinaEditada = {disciplina:this.state.disciplina, 
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
                <h3>Editar disciplina</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Disciplina: </label>
                        <input type="text" className="form-control" 
                        value={this.state.disciplina} onChange={this.setDisciplina}/>
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
                        <input type="submit" value="Editar disciplina" className="btn btn-primary" />
                    </div>
                </form>

            </div>
        )
    }
}