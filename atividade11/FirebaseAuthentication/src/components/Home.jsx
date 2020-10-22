import React, {Component} from 'react'
import Card from './commons/Card'

export default class Home extends Component{
    render(){
        return (
            <Card title='Home' history={this.props.history}>
                Projeto CRUD de disciplina utilizando redux-firebase-authentication
            </Card>
        )
    }
}

