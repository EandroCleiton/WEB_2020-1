import React, { Component } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Create from './components/Create'
import Edit from './components/Edit'
import List from './components/List'
import Logout from './components/ContentA'

import { connect } from 'react-redux'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to={'/'} className='navbar-brand'>DISCIPLINA Firebase Auth</Link>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav mr-auto'>
                <li>
                  <Link to={'/'} className='nav-link'>Home</Link>
                </li>
                <li>
                  <Link to={'/signin'} className='nav-link'>Login</Link>
                </li>
                <li>
                  <Link to={'/signup'} className='nav-link'>Cadastrar</Link>
                </li>
                <li>
                  <Link to={'/create'} className='nav-link'>Criar Disciplina</Link>
                </li>
                <li>
                  <Link to={'/list'} className='nav-link'>Listar</Link>
                </li>
                <li>
                  <Link to={'/contentA'} className='nav-link'>Logout</Link>
                </li>
              </ul>
              {this.props.user}
            </div>  
          </nav>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/signin' component={Signin}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/create' component={Create}/>
            <Route path='/edit/:id' component={Edit}/>
            <Route path='/list' component={List}/>
            <Route path='/contentA' component={Logout}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state){
  return{
    user: state.authReducer.user
  }
}

export default connect(mapStateToProps)(App)