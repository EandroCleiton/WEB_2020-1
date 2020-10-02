import React, { Component } from 'react'

import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

const EditPage = (props) => (
    <FirebaseContext.Consumer>
        {firebase => <Edit firebase={firebase} id={props.match.params.id} />}
    </FirebaseContext.Consumer>
)
class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = { nomeDisciplina: '', curso: '', capacidade: '' }
        this.setNomeDisciplina = this.setNomeDisciplina.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setCapacidade = this.setCapacidade.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    componentDidMount() {
        FirebaseService.retrieve(this.props.firebase.getFirestore(),
            (disciplina) => {
                if (disciplina)
                    this.setState({
                        nomeDisciplina: disciplina.nomeDisciplina,
                        curso: disciplina.curso,
                        capacidade: disciplina.capacidade
                    })
            },
            this.props.id
        )
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
        FirebaseService.edit(
            this.props.firebase.getFirestore(),
            (mensagem) => {
                if (mensagem === 'ok') console.log(`Disciplina foi atualizada`)
            },
            this.props.id,
            {
                nomeDisciplina: this.state.nomeDisciplina,
                curso: this.state.curso,
                capacidade: this.state.capacidade
            }
        ) 

        }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Editar a disciplina</h3>
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
                        <input type="submit" value="Editar a disciplina" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
export default EditPage