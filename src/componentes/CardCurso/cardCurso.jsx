import React, { Component } from "react";
import "./cardCurso.css";
import logolab2 from '../../assets/img/logolab2.png';

class CardCurso extends Component{
    render(){
        return(
            console.log("entrou no cardCurso"),
            <div className="lista-cards">
                <section className="card">
                    <h1 className="card-nome-curso">{this.props.curso}</h1>
                    <img class="card-imagem" src={logolab2}/>
                    <h2 className="card-turma">{this.props.turma}</h2>
                    <h3 className="card-dia-hora">{this.props.dia}</h3>
                    <h3 className="card-preco">{this.props.preco}</h3>
                </section>
            </div>
            );
        }
    }

export default CardCurso;