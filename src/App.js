import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import Compras from './paginas/Compras';
import Cadastro from './paginas/Cadastro';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cadastro' element={<Cadastro />} />
          <Route path='/cursos' element={<Compras />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
