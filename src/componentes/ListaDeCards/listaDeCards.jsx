import React, { Component } from "react";
import CardCurso from "../CardCurso/cardCurso.jsx";
import "./listaDeCards.css";

class ListaDeCards extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <ul>
                <li className="caixa-cards">
                    <CardCurso/>
                </li>
            </ul>
        );
    }
}

export default ListaDeCards;