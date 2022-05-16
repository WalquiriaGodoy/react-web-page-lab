import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cabecalho from './componentes/Cabecalho';
import CardCompras from './componentes/CardCompras/cardCompras';
import Rodape from './componentes/Rodape';
import Home from './paginas/Home';
import Compras from './paginas/Compras';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/sobre' element={<Compras />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
