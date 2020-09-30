import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Inserir from './components/Inserir';
import Listar from './components/Listar';
import Home from './components/Home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand"><i><b>MENU</b></i></Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link"><u>HOME</u></Link>
                </li>
                <li className="nav-item">
                  <Link to={'/inserir'} className="nav-link"><u>INSERIR</u></Link>
                </li>
                <li className="nav-item">
                  <Link to={'/listar'} className="nav-link"><u>LISTAR</u></Link>
                </li>
              </ul>
            </div>
            
          </nav>

          <h2>CRUD SIMPLES</h2> <br />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/inserir' component={Inserir} />
            <Route path='/listar' component={Listar} />
          </Switch>
        </div>
      </Router>

    )
  }
}
