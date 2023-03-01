import React from 'react';
import styled from 'styled-components';


// // const adicionarDado = () => {

// //     const novosDados = [...dados]
// //     novosDados.push ("")
// //     setDados (novosDados)
// // }

const DadosGerais = styled.div`
    display: grid;
    flex-direction: column;
    margin-right: 200px;
    margin-left: 200px;
    text-align: center;
    justify-content: center;

`
const Formulario = styled.form`

    display: grid;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin-right: 500px;
    margin-left: 500px;
`



export function Etapa1 (props) {

    // const {condRenderiza} = props;
    return (
        <DadosGerais>
            <h3>ETAPA 1 - DADOS GERAIS</h3>
            
            <Formulario>
                <label for="nome">1. Qual o seu nome:</label>
                <input placeholder=""></input>

                <label for="idade">2. Qual a sua idade:</label>
                <input placeholder=""></input>
                
                <label for="email">3. Qual o seu email:</label>
                <input placeholder=""></input>

                <label for="escolaridade">4. Qual a sua escolaridade:</label>
                <input placeholder=""></input>
            </Formulario>
          
        </DadosGerais>
)}

// const [dados, setDados] = useState ([])

// const listaDeDados = dados.map((dado) => {
//       return (<p key={dado}>{dado}</p>)
        
// }

// const adicionarDado = () => {

// const novosDados= [...dados]
// novosDados.push ("")
// setDados (novosDados)
// return(
        
//   <>
        
//   </>
// )

// } 

// export default Etapa1