
// import './App.css';

import React from 'react';

import styled from 'styled-components';


import Logo from './img/logo.jpg'


const Titulo = styled.h3`
  display: flex;
  align-itens: center;
  justify-content: center;
  font-size: 25px;
  
   
`
const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    margin: 0px;
    height: 70px;
    
    img{
      width: 75px;
    }
    
`


const Principal = styled.main`
    display: flex;
    height: 525px;
    width: 1360px;
    justify-content: space-between;
    padding-botton: 0px;
    margin-botton: 0px;
      
`

const AreaDados=styled.section`
    display: flex;
    justify-content: flex-end;
    margin-top: 510px;
    margin-right: 10px;


`
const BoxLaranja = styled.div`
    background-color: orange;
    height: 550px;
    width: 250px;
    
 
`
const BoxLaranja1 = styled.div`
    background-color: orange;
    height: 550px;
    width: 250px;
    color: organge;
   
`

const InputNome = styled.input`
    display: flex;
    color: black;
    height: 15px;
    margin-right: 10px;
    margin-left:5px;

`

const InputMsg = styled.input`
    display: flex;
    color: black;
    height: 15px;
    widht: 300px;
    margin-right: 10px;
    margin-left:5px;
  `

// const Conteudo = styled.div`
//   display: grid;
 
//   grid template column: 1fr 5fr 1fr;
  
// `

const Botao = styled.button`
  background: #d3d3d3;
  border-radius; 5px;
  align-items: center;
  height: 21px;
`

const Rodape = styled.footer`
  text-align: center;
  background-color: #d3d3d3;
  padding-top: 0px;
  
`

function App() {

  return (
    <div>
      <Header>
        <img width="8%" src={Logo} alt="Logo Labenu"/>
        <Titulo>LabZap/ WhatsLab</Titulo>
      </Header>

      <Principal>
          <BoxLaranja></BoxLaranja>
          <AreaDados>
              <label for="Remetente">Remetente:</label>
              <InputNome placeholder=''></InputNome>
              <label for="Msg">Msg:</label>
              <InputMsg placeholder=''></InputMsg>
              <Botao>Enviar Mensagem</Botao>
          </AreaDados>
        <BoxLaranja1></BoxLaranja1>
      </Principal>

      <Rodape>
        <h6>Copyright © 2022 CMarques All rights reserved Rua Pais Leme, 215, Conjunto 820 Pinheiros</h6>
      </Rodape>
     
    </div>
  );
}

export default App;
