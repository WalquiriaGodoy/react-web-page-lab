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

    selecionaTurmaPorId(turmaId){
        const turma = this.state.turmas.filter((turma)=> turma.id == turmaId)
        this.props.turmaSelecionada(turma)
      }

    render(){
        return(
            <ul>
                {this.state.turmas.map((cards, index) => {
                    return(
                        <li className="caixa-cards" key={index}>
                            <CardCurso
                            turmaSelecionada={this.selecionaTurmaPorId.bind(this)}
                            indice = {index}
                            curso = {cards.curso}
                            turma = {cards.turma}
                            dia = {cards.dia}
                            preco = {cards.preco} 
                            id = {cards.id}  
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeCards;