import React from 'react';
import styled from 'styled-components'

const EnsinoSuperior = styled.div`
    display: grid;
    flex-direction: column;
    margin-right: 200px;
    margin-left: 200px;
    text-align: center;
    justify-content: center;

`
const FormularioES = styled.form`

    display: grid;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin-right: 500px;
    margin-left: 500px;
`


export function Etapa2 (props) {

    // const {condRenderiza} = props;
    return (
        <EnsinoSuperior>
            <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
            
            <FormularioES>
                <label for="curso">1. Qual curso:</label>
                <input placeholder=""></input>

                <label for="unidadeEnsino">2. Qual a unidade de ensino:</label>
                <input placeholder=""></input>
                
            </FormularioES>

        </EnsinoSuperior>
)}
