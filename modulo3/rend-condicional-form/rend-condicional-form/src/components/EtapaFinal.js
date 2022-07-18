import React from 'react';
import styled from 'styled-components'

const Final = styled.div`
    display: grid;
    text-align: center;
    justify-content: center;

`
// const Final = styled.form`

//     display: grid;
//     flex-direction: column;
//     text-align: center;
//     justify-content: center;
//     margin-right: 500px;
//     margin-left: 500px;
// `

export function EtapaFinal (props) {

    // const {condRenderiza} = props;
    return (
        <Final>
            <h3>O FORMULÁRIO ACABOU</h3>
            <h4>Muito obrigado por participar! Entraremos em contato!</h4>
            
        </Final>
)}