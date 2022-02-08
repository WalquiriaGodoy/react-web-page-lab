import React, { Component } from "react";
import CardCurso from "../CardCurso/cardCurso.jsx";
import "./listaDeCards.css";

class ListaDeCards extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <ul className="lista-cards">
                <li className="lista-cards_item">
                    <CardCurso/>
                </li>
            </ul>
        );
    }
}

export default ListaDeCards;