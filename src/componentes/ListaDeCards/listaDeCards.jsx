import React, { Component } from "react";
import CardCurso from "../CardCurso/cardCurso.jsx";
import "./listaDeCards.css";

class ListaDeCards extends Component{
    constructor(){
        super();
        this.state = {turmas: []};
    }

    componentDidMount(){
        this.props.turmas.inscrever(this.novasTurmas.bind(this));
    }
    
    componentWillUnmount(){
        this.props.turmas.desinscrever(this.novasTurmas.bind(this));
    }

    novasTurmas(turmas){
        this.setState({turmas});
    }

    render(){
        return(
            console.log("entrou no Lista de cards", this.props),
            <ul>
                {this.state.turmas.map((cards, index) => {
                    return(
                        <li className="caixa-cards" key={index}>
                            <CardCurso
                            indice = {index}
                            curso = {cards.curso}
                            turma = {cards.turma}
                            dia = {cards.dia}
                            preco = {cards.preco}   
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeCards;