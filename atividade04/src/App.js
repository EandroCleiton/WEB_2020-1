import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Criar from './components/Criar';
import Editar from './components/Editar';
import Listar from './components/Listar';
import Home from './components/Home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/criar'} className="nav-link">CRIAR</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/listar'} className="nav-link">LISTAR</Link>
                </li>
              </ul>
            </div>
            
          </nav>
          
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/criar' component={Criar} />
            <Route path='/editar/:id' component={Editar} />
            <Route path='/listar' component={Listar} />
          </Switch>
        </div>
      </Router>

    )
  }
}