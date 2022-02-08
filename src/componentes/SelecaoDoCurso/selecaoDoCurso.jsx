import React, { Component } from "react";
import './selecaoDoCurso.css';

class selecaoDoCurso extends Component{
 
    render(){
        return(
        <form className="formulario">
            <h1 className="titulo-principal">Qual curso você gostaria de fazer?</h1>
            <select className="selecao-curso">
                <option>Selecione o Curso</option>
                <option>Forró Universitário</option>
                <option>Forró Estilo Roots</option>
                <option>Samba de Gafieira</option>
            </select>
        </form>
        )
    }
}

export default selecaoDoCurso;