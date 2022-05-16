import React, { Component } from 'react';
import { Typography, Box } from '@material-ui/core';
import salaolab from '../../assets/img/salaolab.jpeg';
import './sobre.css';

class Sobre extends Component {
  render() {
    return (
      <div className='principal'>
        <Box m={2} pt={3}>
          <Typography variant='h5' align='center'>
            Sobre o Laboratório de Forró da Wal
          </Typography>
        </Box>
        <img className='img-sobre' src={salaolab} />
        <Typography align='justify'>
          {' '}
          Localizado em São Paulo, na região do Butantã, o Laboratório de Forró
          traz para o mercado da dança de salão, os cursos de Forró e Samba de
          Gafieira sob uma perspectiva social, cultural e técnica voltada para a
          consciência corporal e promoção de saúde física e mental.
        </Typography>
        <Typography align='justify'>
          {' '}
          Fundado em 2019, o Laboratório de Forró, hoje, oferece cursos de
          outros ritmos, aulas particulares e treinamento físico voltado
          principalmente para a dança.
        </Typography>
        <Box m={2} pt={3}>
          <Typography variant='h6' align='lefth'>
            Professora Walks:
          </Typography>
          <Typography align='justify'>
            {' '}
            Nossas aulas de dança são ministradas pela professora Walquiria
            Godoy. Formada inicialmente no curso de Licenciatura em Física,
            nossa professora passou pela Faculdade de Educação e de Filosofia da
            Universidade de São Paulo e, no âmbito da dança de salão, a qual
            pratica há 12 anos, foi aluna do Pé Descalço de São Paulo e da
            Gafieira da Ladeira. A professora segue seus estudos na dança de
            salão, fez parte da Cia Vanessa Jardim Dança e é graduanda do curso
            de Educação Física da Escola de Educação Física e Esportes da USP.
            Ela acredita que sua vivência multidisciplinar na universidade e na
            dança de salão foram fundamentais para constituir uma visão completa
            e diferenciada da dança e do ensino de dança, que se reflete
            diretamente no objetivo, conteúdo e metodologia presentes em suas
            aulas de Forró e Samba.
          </Typography>
        </Box>
        <Box m={2} pt={3}>
          <Typography variant='h6' align='center'>
            Missão:
          </Typography>
          <Typography align='center'>
            {' '}
            Proporcionar atividades da dança que promovam maior qualidade de
            vida associada a saúde física, mental e social dos alunos.
          </Typography>
        </Box>
      </div>
    );
  }
}

export default Sobre;
