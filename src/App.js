import React, {Component} from 'react';
import './assets/index.css';
import './assets/App.css';
import Cabecalho from './componentes/Cabecalho';
import SelecaoDoCurso from './componentes/SelecaoDoCurso';
import ListaDeCards from './componentes/ListaDeCards';
import CarrinhoDeCompras from './componentes/CarrinhoDeCompras';
import Pagamento from './componentes/Pagamento';
import Rodape from './componentes/Rodape';
import ArrayDeCards from './dados/Cursos';

class App extends Component {
  constructor(){
    super();
    this.arrayDeCards = new ArrayDeCards();
    this.turmasDoCurso = [];
    this._inscritos = [];

  }
  inscrever(func) {
      this._inscritos.push(func);
  }
  
  desinscrever(func){
      this._inscritos = this._inscritos.filter(f => f !== func);
  }
  
  notificar() {
      this._inscritos.forEach(func => {
          func(this.turmasDoCurso)
      })
  }
  filtrarTurmas(curso){
    const turmasDoCurso = this.arrayDeCards.turmas.filter((turma)=> turma.curso == curso);
    this.turmasDoCurso = turmasDoCurso;
    this.notificar();
  }

  render(){
    return(
      <section className='conteudo'>

        <Cabecalho/>

        <section className='conteudo-principal'>

          <div className='caixa-cursos'>
            <SelecaoDoCurso
              cursos={this.arrayDeCards.cursos}
              cursoSelecionado={this.filtrarTurmas.bind(this)}
              />
            <ListaDeCards
              turmas={this}
              />
          </div>

          <section className='compras'>

            <div className='caixa-carrinho'>
              <CarrinhoDeCompras/>
            </div>
            
            <div className='caixa-pagamento'>
              <Pagamento/>
            </div>

          </section>
          
        </section>

        <Rodape/>  

      </section>
    )
  }
}

export default App;