import React, { Component } from "react";
import './cabecalho.css';
import logolab2 from '../../assets/img/logolab2.png';

class Cabecalho extends Component{
    constructor(){
        super()
    }
    
    render(){
        return(
            <header>
                <div class="caixa-transparente">
                <img class="cabecalho-logo" src={logolab2}/>
                    <nav>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="produtos.html">Aulas de Dança</a></li>
                            <li><a href="contato.html">Contato</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )}
    }
    
export default Cabecalho;