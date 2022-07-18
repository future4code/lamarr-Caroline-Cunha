
// import {SeletorPagina} from "./components/SeletorPagina";
import {Etapa1} from "./components/Etapa1";
import {Etapa2} from "./components/Etapa2";
import { Etapa3 } from "./components/Etapa3";
// import React, {useState} from 'react';
import { EtapaFinal } from "./components/EtapaFinal";

// import styled from "styled-components";



function App() {
            

  return(
    <div>
                   
      <Etapa1/>
      <Etapa2/>
      <Etapa3/>
      <EtapaFinal/>

      <button>Próxima Etapa</button>

    </div>
  )

  }

// // estados Etapa1
// const [inputNome, setInputNome ] = useState ("")
// const [inputIdade, setInputIdade] = useState ("")
// const [inputEmail, setInputEmail] = useState ("")
// const [dados, setDados] = useState ([])

// // eventos

// const handleInputNome = (e) => {
//   setInputNome(e.target.value)
// }

// const handleInputIdade = (e) => {
//   setInputIdade(e.target.value)
// }

// const handleInputEmail = (e) => {
//   setInputEmail(e.target.value)
// }

// // adicionar item
// const adiconarDados = (e) => {
//   e.preventDefault; 
//   const novaEtapa1 = {nome:inputNome, idade:inputIdade, email:inputEmail}
//   const novosDados = [...dados, novaEtapa1]
//   setDados (novosDados)
// }

//   return (
//     <div className="App">
    
//       <h1>ETAPA 1 - DADOS GERAIS</h1>
//              <form>
//                  <label>1. Qual o seu nome?</label>
//                  <input>
//                      placeholder="Insira seu nome"
//                      value={inputNome}
//                      onChange={handleInputNome}
//                  </input>
//                  <label>2. Qual o sua idade?</label>
//                  <input>
//                      placeholder="Insira sua idade"
//                      value={inputIdade}
//                      onChange={handleInputIdade}
//                      </input>
//                  <label>3. Qual o seu email?</label>
//                  <input>
//                      placeholder="Insira seu email"
//                      value={inputEmail}
//                      onChange={handleInputEmail}
//                  </input>
//                  <label>4. Qual o sua escolaridade?</label>
//                  <input>
//                      placeholder="Selecione sua escolaridade"
//                  </input>
//              </form>
//              {listaDeDados}
//     </div>
//   );

export default App;
