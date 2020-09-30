import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

import Questao01 from './components/questao01/Questao01';
import Questao02 from './components/questao02/Questao02';
import PropsPai from './components/questao03/PropsPai';
import PropsFilho from './components/questao03/PropsFilho';
import Pai from './components/questao04/Pai';
import Filho from './components/questao04/Filho';
import FilhoBoo from './components/questao05/FilhoBoo';

function App() {
  return (
    <div className="App">

      <div>
        <h3>Questão 01</h3>
        <Questao01 />

        <h3>Questão 02</h3>

        <Questao02 nome='Eandro Cleiton'
          curso='Sistemas de Informação'
          cidade='Quixadá - CE' />

        <h3>Questão 03</h3>
        <PropsFilho>
          <PropsPai nome="Eandro" curso="Sistemas de Informação" cidade="Quixadá-CE" />
        </PropsFilho>

        <h3>Questão 04</h3>
        <Filho>
          <Pai nome="Eandro" curso="Sistemas de Informação" cidade="Quixadá-CE" />
        </Filho>

        <h3>Questão 05</h3>
        <FilhoBoo>
          <Pai nome="Eandro" curso="Sistemas de Informação" cidade="Quixadá-CE" />
        </FilhoBoo>

      </div>

    </div>
  );
}

export default App;