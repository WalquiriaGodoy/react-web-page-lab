import React, { Component } from "react";
import './rodape.css';
import logolab2 from '../../assets/img/logolab2.png';

class Rodape extends Component{
    constructor(){
        super()
    }

render(){
    return(
        <footer>
            <img class="rodape-logo" src={logolab2}/>
            <p class="copyright">&copy; Copyright Laboratório de Forró - 2021</p>
        </footer>
    )
}
}
export default Rodape;