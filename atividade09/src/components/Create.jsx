import React, { Component } from 'react'

import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

const CreatePage = () => (
    <FirebaseContext.Consumer>
        {firebase => <Create firebase={firebase} />}
    </FirebaseContext.Consumer>
)
class Create extends Component {
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
    onSubmit(e) {
        e.preventDefault()
        const disciplina = { 
            nomeDisciplina: this.state.nomeDisciplina,
            curso: this.state.curso,
            capacidade: this.state.capacidade
        }
        FirebaseService.create(this.props.firebase.getFirestore(),
            (mensagem) => {
                console.log(mensagem)
            },
            disciplina)
        this.setState({ nomeDisciplina: '', curso: '', capacidade: '' })
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Criar disciplina</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome da disciplina: </label>
                        <input type="text" className="form-control"
                            value={this.state.nomeDisciplina} onChange={this.setNomeDisciplina} />
                    </div>
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text" className="form-control"
                            value={this.state.curso} onChange={this.setCurso} />
                    </div>
                    <div className="form-group">
                        <label>Capacidade: </label>
                        <input type="text" className="form-control"
                            value={this.state.capacidade} onChange={this.setCapacidade} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Criar a disciplina" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
export default CreatePage