import React, { Component } from 'react';
import CardCompras from '../CardCompras/cardCompras.jsx';
import './carrinhoDeCompras.css';

class CarrinhoDeCompras extends Component {
  constructor() {
    super();
    this.state = { turmasNoCarrinho: [] };
  }

  componentDidMount() {
    this.props.turmas.inscrever1(this.turmasParaCompra.bind(this));
  }

  componentWillUnmount() {
    this.props.turmas.desinscrever1(this.turmasParaCompra.bind(this));
  }
  turmasParaCompra(turmasNoCarrinho) {
    this.setState({ turmasNoCarrinho });
  }

  render() {
    return (
      <>
        <h1 className='titulo-principal'>Meu Carrinho de Compras</h1>
        {console.log('turmas no carrinho:', this.state.turmasNoCarrinho)}
        <ul className='lista-compras'>
          {this.state.turmasNoCarrinho.map((turma, index) => {
            return (
              <li className='caixa-card-compras' key={index}>
                <CardCompras
                  turmas={turma}
                  indice={index}
                  curso={turma.curso}
                  turma={turma.turma}
                  dia={turma.dia}
                  preco={turma.preco}
                  id={turma.id}
                />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
export default CarrinhoDeCompras;
