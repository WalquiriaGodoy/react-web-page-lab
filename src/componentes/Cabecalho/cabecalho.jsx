import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './cabecalho.css';
import logolab2 from '../../assets/img/logolab2.png';

class Cabecalho extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header>
        <div class='caixa-transparente'>
          <img class='cabecalho-logo' src={logolab2} />
          <ul className='lista-navegacao'>
            <li>
              <Link className='item-lista-navegacao' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='item-lista-navegacao' to='/cadastro'>
                Cadastro
              </Link>
            </li>
            <li>
              <Link className='item-lista-navegacao' to='/cursos'>
                Cursos
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Cabecalho;
