import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './cabecalho.css';
import logolab2 from '../../assets/img/logolab2.png';
import { Button } from '@material-ui/core';
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
                <Button variant='outlined'>Home</Button>
              </Link>
            </li>
            <li>
              <Link className='item-lista-navegacao' to='/cursos'>
                <Button variant='outlined'>Cursos</Button>
              </Link>
            </li>
            <li>
              <Link className='item-lista-navegacao' to='/cadastro'>
                <Button variant='outlined'>Cadastro</Button>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Cabecalho;
