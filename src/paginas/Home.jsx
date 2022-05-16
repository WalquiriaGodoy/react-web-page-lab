import React, { Component } from 'react';
import Cabecalho from './../componentes/Cabecalho';
import Rodape from '../componentes/Rodape';
import Sobre from '../componentes/Sobre';

class Home extends Component {
  render() {
    return (
      <section className='conteudo'>
        <Cabecalho />
        <Sobre />
        <Rodape />
      </section>
    );
  }
}

export default Home;
