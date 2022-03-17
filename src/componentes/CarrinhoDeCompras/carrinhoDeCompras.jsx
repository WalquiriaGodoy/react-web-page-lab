import React, { Component } from "react";
import CardCompras from "../CardCompras/cardCompras.jsx";
import './carrinhoDeCompras.css';

class CarrinhoDeCompras extends Component{

    constructor(){
        super();
        this.state = {turmasNoCarrinho: []};
    }

    componentDidMount(){
        this.props.turmas.inscrever1(this.turmasParaCompra.bind(this));
    }
    
    componentWillUnmount(){
        this.props.turmas.desinscrever1(this.turmasParaCompra.bind(this));
    }
    turmasParaCompra(turmasNoCarrinho){
        debugger
        this.setState({turmasNoCarrinho});
    }

    render(){
        return(
            <>
                <h1 className="titulo-principal">Meu Carrinho de Compras</h1>
                {console.log(this.state.turmasNoCarrinho)}
                <ul>
                {this.state.turmasNoCarrinho.map((turma, index) => {
                    return(
                        <li className="caixa-cards" key={index}>
                            <CardCompras
                            turmas={turma}/>
                        </li>
                    );
                })}
            </ul>
            </>
        )
    }
}
export default CarrinhoDeCompras;