import React, {Component} from 'react';
import './assets/index.css';
import './assets/App.css';
import Cabecalho from './componentes/Cabecalho';
import SelecaoDoCurso from './componentes/SelecaoDoCurso';
import CarrinhoDeCompras from './componentes/CarrinhoDeCompras';
import Pagamento from './componentes/Pagamento';
import Rodape from './componentes/Rodape';

class App extends Component {
  constructor(){
    super();
  }
  render(){
    return(
      <section className='conteudo'>

        <Cabecalho/>

        <section className='conteudo-principal'>

          <div className='caixa-cursos'>
            <SelecaoDoCurso/>
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