//importando bibliotecas
import React, { useEffect, useState } from "react";
import axios from 'axios';
//importando imagens
import coracao from './img/heart-red.png'
import xis from './img/xis-vermelho.png'
//importando componentes estilizados
import {FotoPessoa, BotaoLike, BotaoDisLike, Identificacao,
   BotaoContainer, FotoContainer} from './styles'

import Swal from 'sweetalert2'




function EscolherPessoa() {
  //declaração de hooks usestate
  const [nome, setNome] = useState('');
  const[idade, setIdade]= useState(0);
  const[descricao, setDescricao] = useState('');
  const[foto, setFoto] = useState('');
  const[alt, setAlt] = useState('');
  const[id, setId] = useState('');
  //declaração de constantes da API
  const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carolina';
  const header= {
    'Content-Type': "application/json"
}


//Funções de API
async function clearAll(){
  try {
      await axios
      .put(`${url}/clear`,header)
     
  } catch (error) {
      alert('Erro')
  }
}
  const getProfile = () => {
    axios.get(`${url}/person`)
    .then((res) => {
      console.log(res.data.profile)
        setNome(res.data.profile.name)
        setIdade (Number(res.data.profile.age))
        setFoto(res.data.profile.photo)
        setDescricao(res.data.profile.bio)
        setAlt(res.data.profile.photo_alt)
        setId(res.data.profile.id)
    })
    .catch((err) => {
        console.log(err.message)
        // alert('Parece que não há ninguém por perto. Que tal deletar os matches e recomeçar?')
        Swal.fire({
          
          text: "Parece que não há ninguém por perto. Que tal deletar os matches e recomeçar?",
          icon: 'warning',
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sim, deletar matches'
        }).then((result) => {
          if (result.isConfirmed) {
            clearAll()
            Swal.fire(
              'Matches deletados',
              'com sucesso',
              'success'
            )
          }
        })
    })
  }


  async function dislike(id){
    const body = {
        id: id,
        choice: false
    }
    try {
        await axios
        .post(`${url}/choose-person`, body, header)
        console.log('Não deu like')
        getProfile()
    } catch (error) {
      console.log(error.response) 
      // alert('Que tal deletar os matches?')

    }
  }

  async function like(id){
      const body = {
          id: id,
          choice: true
      }
      try {
          await axios
          .post(`${url}/choose-person`, body, header)
          console.log('Deu like')
          getProfile()
      } catch (error) {
        console.log(error.response)
        // alert('Que tal deletar os matches?')
      }
  }
  
  //useeffect para puxar dados assim que o componente renderizar
  useEffect(() => {
    getProfile()
  },[]);
  
    return (
      <div>
      <FotoContainer/>
      <FotoPessoa src= {foto} alt={alt}/>
      
      <Identificacao>
        <span>
        <h2>{nome}</h2>
        <h2>, {idade}</h2>
        </span>
        <p>{descricao}</p>
      </Identificacao>

      <BotaoContainer>
      
      <BotaoDisLike src={xis} alt="dislike"  onClick={() => dislike(id)} />
      <BotaoLike src={coracao} alt="like" onClick={()=>like(id)} />
      </BotaoContainer>
      
      </div>
    );
  }
  
  export default EscolherPessoa;
  