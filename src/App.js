import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
