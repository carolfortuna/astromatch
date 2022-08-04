//importando bibliotecas
import React from 'react'
import { useState } from "react";
import axios from 'axios';

//importando componentes estilizados
import  { Background, Div, Logo, Hr, Icone, Cabecalho} from "./stylesApp.js";

//importando imagens 
import  logo from './img/astromatch-logo.png';
import botaoMatch from './img/botao-match.png'
import volta from './img/volta.png'

//importando componentes das telas
import EscolherPessoa from './components/EscolherPessoa/EscolherPessoa.jsx';
import ListaMatches from './components/ListaMatches/ListaMatches';





function App() {


  //troca de telas 
  const [tela, setTela] =useState('escolheMatch');
  let telaExibida = ''
  switch(tela){
    
    case 'escolheMatch':
        telaExibida = <div>
        <EscolherPessoa/>
        </div>;
        break;
    case 'listaMatches':
      telaExibida = <div>
        <ListaMatches/>
      </div>;
      break;
    default:
      telaExibida = <div>
        <EscolherPessoa/>
        </div>;
        break;
  }
  
  const irParaLista = () =>{
    setTela('listaMatches')
  }

  const irParaEscolha = () =>{
    setTela('escolheMatch')
  }
  //ate aqui
  const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carolina';
  const header= {
    'Content-Type': "application/json"
}

  return (
    <div className="App">
      <Background>
      <Div>

      <Cabecalho>
      <Icone src = {volta}
      alt= 'escolher-match'
      onClick={irParaEscolha}/>
      <Logo src= {logo}/>
      <Icone src={botaoMatch} 
      alt="lista-matches" 
      onClick={irParaLista} />
      
      </Cabecalho>
      <Hr />

      {telaExibida}

      </Div>
      </Background>
    </div>
  );
}

export default App;
