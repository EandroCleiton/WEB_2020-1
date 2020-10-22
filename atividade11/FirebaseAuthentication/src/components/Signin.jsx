import React, {Component} from 'react'
import Card from './commons/Card'

import {connect} from 'react-redux'
import {signin} from '../store/actions/authActionCreator' 

class Signin extends Component{
   
    constructor(props) {
        super(props)
        this.state = { login: '', password: '' }
        this.setLogin = this.setLogin.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setLogin(e) {
        this.setState({ login: e.target.value })
    }

    setPassword(e) {
        this.setState({ password: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        this.props.mySignin(this.state.login, this.state.password,()=>{
            console.log('fim')
        })
        this.setState({ login: '', password: ''})
    }
    render(){
        return(
            <Card title='Singin'>
           <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Login: </label>
                        <input type='text' className='form-control'
                            value={this.state.login} onChange={this.setLogin} />
                    </div>
                    <div className='form-group'>
                        <label>Password: </label>
                        <input type='password' className='form-control'
                            value={this.state.password} onChange={this.setPassword} />
                    </div>
                    <input type='submit' value='Login' className='btn btn-primary'/>
                </form>
                <div className='alert alert-info' style={{marginTop:'10px'}}>
                    {this.props.userMsg}
                </div>
        </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        userMsg: state.authReducer.authMsg
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mySignin(login, password, callback) {
            const action = signin(login, password,callback)
            dispatch(action)
        }
    }
}  

export default connect(mapStateToProps, mapDispatchToProps)(Signin)