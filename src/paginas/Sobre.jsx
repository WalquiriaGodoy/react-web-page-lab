import React, { Component } from 'react';
import './../assets/index.css';
import './../assets/Sobre.css';
import Cabecalho from './../componentes/Cabecalho';
import SelecaoDoCurso from '../componentes/SelecaoDoCurso';
import ListaDeCards from '../componentes/ListaDeCards';
import CarrinhoDeCompras from '../componentes/CarrinhoDeCompras';
import Pagamento from '../componentes/Pagamento';
import Rodape from '../componentes/Rodape';
import ArrayDeCards from '../dados/Cursos';

class Sobre extends Component {
  constructor() {
    super();
    this.arrayDeCards = new ArrayDeCards();
    this.turmasDoCurso = [];
    this._inscritos = [];
    this._inscritos1 = [];
    this.turmasDeCompra = [];
  }

  inscrever1(func) {
    this._inscritos1.push(func);
  }

  desinscrever1(func) {
    this._inscritos1 = this._inscritos1.filter((f) => f !== func);
  }

  notificar1() {
    this._inscritos1.forEach((func) => {
      func(this.turmasDeCompra);
    });
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  desinscrever(func) {
    this._inscritos = this._inscritos.filter((f) => f !== func);
  }

  notificar() {
    this._inscritos.forEach((func) => {
      func(this.turmasDoCurso);
    });
  }

  filtrarTurmas(curso) {
    const turmasDoCurso = this.arrayDeCards.turmas.filter(
      (turma) => turma.curso == curso
    );
    this.turmasDoCurso = turmasDoCurso;
    this.notificar();
  }

  adicionarTurma(turma) {
    console.log('turma', turma);
    this.turmasDeCompra.push(turma);
    this.notificar1();
  }

  render() {
    return (
      <section className='conteudo'>
        <Cabecalho />

        <section className='conteudo-principal'>
          <div className='caixa-cursos'>
            <SelecaoDoCurso
              cursos={this.arrayDeCards.cursos}
              cursoSelecionado={this.filtrarTurmas.bind(this)}
            />
            <ListaDeCards
              turmaSelecionada={this.adicionarTurma.bind(this)}
              turmas={this}
            />
          </div>

          <section className='compras'>
            <div className='caixa-carrinho'>
              <CarrinhoDeCompras
                turmas={this}
                turmasDeCompra={this.turmasDeCompra}
              />
            </div>

            <div className='caixa-pagamento'>
              <Pagamento />
            </div>
          </section>
        </section>

        <Rodape />
      </section>
    );
  }
}

export default Sobre;
