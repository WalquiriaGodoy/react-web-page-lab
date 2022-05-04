import React, { Component } from 'react';
import './cardCompras.css';
import logolab2 from '../../assets/img/logolab2.png';

class CardCompras extends Component {
  _turmaSelecionada(evento) {
    evento.stopPropagation();
    const turmaSelecionadaId = evento.currentTarget.id;
    this.props.turmaSelecionada(turmaSelecionadaId);
  }

  render() {
    return (
      <div className='lista-card-compras'>
        <section
          className='card-compras'
          id={this.props.id}
          onClick={this._turmaSelecionada.bind(this)}
        >
          <h1 className='card-nome-curso'>{this.props.curso}</h1>
          <img className='card-compras-imagem' src={logolab2} />
          <h2 className='card-turma'>{this.props.turma}</h2>
          <h3 className='card-dia-hora'>{this.props.dia}</h3>
          <h3 className='card-preco'>{this.props.preco}</h3>
        </section>
      </div>
    );
  }
}

export default CardCompras;
