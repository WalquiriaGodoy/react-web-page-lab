import React, { Component } from "react";
import './selecaoDoCurso.css';

class selecaoDoCurso extends Component{

    _handleChange(evento) {
        evento.stopPropagation();
        const curso = evento.target.value;
        this.props.cursoSelecionado(curso);
      }

    render(){
        return(
        <form className="formulario">
            <h1 className="titulo-principal">Qual curso você gostaria de fazer?</h1>
            <select className="selecao-curso" onChange={this._handleChange.bind(this)}>
                <option value="">Selecione o Curso</option>
                {/* Candidato a uma lista via props ou state */}

                {this.props.cursos.map((curso)=>{
                        return(<option value={curso}>{curso}</option>)
                    })}
            </select>
        </form>
        )
    }
}

export default selecaoDoCurso;