import React, { Component } from 'react'

import TableRow from './TableRow'
import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

const ListPage = () => (
    <FirebaseContext.Consumer>
        {firebase => <List firebase={firebase} />}
    </FirebaseContext.Consumer>
)
class List extends Component {
    constructor(props) {
        super(props)

        this._isMounted = false
        this.state = { disciplinas: [], loading: false }
    }
    componentDidMount() {
        this._isMounted = true
        this.setState({ loading: true })
        FirebaseService.list(this.props.firebase.getFirestore(),
            (disciplinas) => {
                this._isMounted && this.setState({ disciplinas: disciplinas, loading: false })
            })
    }
    componentWillUnmount() {
        this._isMounted = false
    }
    montarTabela() {
        if (!this.state.disciplinas) return
        if (this.state.loading) return this.loadingSpinner()
        return this.state.disciplinas.map(
            (disc, i) => {
                return <TableRow disciplina={disc}
                    key={i}
                    firebase={this.props.firebase} />
            }
        )
    }
    loadingSpinner() {
        return (
            <tr style={{ backgroundColor: '#fff' }}>
                <td colSpan='6'>
                    <div className="text-center">
                        <div className="spinner-border ml-auto"
                            role="status"
                            aria-hidden="true"
                            style={{ width: '3rem', height: '3rem' }}></div><br />
                        <strong>Loading...</strong>
                    </div>
                </td>
            </tr>
        )
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Lista de disciplinas</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Nome da disciplina</th>
                            <th>Curso</th>
                            <th>Capacidade</th>
                            <th colSpan="2"></th>
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
export default ListPage