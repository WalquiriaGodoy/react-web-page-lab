import React, { Component } from 'react';
import Cabecalho from './../componentes/Cabecalho';
import Rodape from '../componentes/Rodape';
import FormCadastro from '../componentes/FormCadastro';

class Cadastro extends Component {
  render() {
    return (
      <section className='conteudo'>
        <Cabecalho />
        <FormCadastro />
        <Rodape />
      </section>
    );
  }
}

export default Cadastro;
