import React, { Component } from "react";
import "./cardCurso.css";
import logolab2 from '../../assets/img/logolab2.png';

class CardCurso extends Component{
    render(){
        return(
            <div className="lista-cards">
                <section className="card">
                    <h1 className="card-nome-curso">Forró</h1>
                    <img class="card-imagem" src={logolab2}/>
                    <h2 className="card-turma">Turma Galileu</h2>
                    <h3 className="card-dia-hora">Terça 21h</h3>
                    <h3 className="card-preco">R$70,00</h3>
                </section>
                <section className="card">
                    <h1 className="card-nome-curso">Forró</h1>
                    <img class="card-imagem" src={logolab2}/>
                    <h2 className="card-turma">Turma Newton</h2>
                    <h3 className="card-dia-hora">Terça 21h</h3>
                    <h3 className="card-preco">R$70,00</h3>
                </section>
                <section className="card">
                    <h1 className="card-nome-curso">Forró</h1>
                    <img class="card-imagem" src={logolab2}/>
                    <h2 className="card-turma">Turma Einstein</h2>
                    <h3 className="card-dia-hora">Terça 21h</h3>
                    <h3 className="card-preco">R$70,00</h3>
                </section>
            </div>
            );
        }
    }

export default CardCurso;