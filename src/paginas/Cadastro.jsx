import React, { Component } from 'react';
import Cabecalho from './../componentes/Cabecalho';
import Rodape from '../componentes/Rodape';

class Cadastro extends Component {
  render() {
    return (
      <section className='conteudo'>
        <Cabecalho />
        <Rodape />
      </section>
    );
  }
}

export default Cadastro;
