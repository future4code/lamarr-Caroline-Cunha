import React from 'react';
import styled from 'styled-components'

const InfEnsino = styled.div`
    display: grid;
    flex-direction: column;
    margin-right: 200px;
    margin-left: 200px;
    text-align: center;
    justify-content: center;

`
const FormularioInfEns = styled.form`

    display: grid;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin-right: 500px;
    margin-left: 500px;
`
export function Etapa3 (props) {

    // const {condRenderiza} = props;
    return (
        <InfEnsino>
            <h3>ETAPA 3 - INFORMAÇÕES GERAIS DO ENSINO</h3>
            
            <FormularioInfEns>
                <label for="Pq nao terminou">7. Por que você não terminou o curso de graduação?:</label>
                <input placeholder=""></input>

                <label for="Curso Complementar">8. Você fez algum curso complementar?</label>
                <input placeholder=""></input>
                
            </FormularioInfEns>

        </InfEnsino>
)}