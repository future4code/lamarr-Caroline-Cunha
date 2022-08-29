import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToBack } from '../constants/coordinator';
import { ContainerAF, TituloAF, FormularioAF, ButtonAF, ButtonAFEnviar } from '../Components/style';



const ApplicationFormPage = () => {

    const navigate=useNavigate(); 

    const[inputName, setInputName] = useState()
    const[inputAge, setInputAge] = useState()
    const[inputApplicationText, setInputApplicationText] = useState()
    const[inputProfession, setInputProfession] = useState()
    const[inputCountry, setInputCountry] = useState()
    
    const body = {
        "name": inputName,
        "age": inputAge,
        "applicationText":inputApplicationText,
        "profession": inputProfession,
        "country": inputCountry,
    }


   const onSubmit = (e) => {
    
    console.log(body)
    e.preventDefault()
    }
    
    return (
        <ContainerAF>
            <TituloAF>Formulário de Aplicação</TituloAF>
            <FormularioAF onSubmit={onSubmit}>
                <label>Nome:</label>
                <input placeholder="Nome" value={inputName} onChange={(event)=>{setInputName(event.target.value)}} required></input>
                <label>Idade:</label>
                <input placeholder="Idade" value={inputAge} onChange={(event)=>{setInputAge(event.target.value)}} required></input>
                <label>Texto de Aplicação:</label>
                <input placeholder="Texto" value={inputApplicationText} onChange={(event)=>{setInputApplicationText(event.target.value)}} required></input>
                <label>Profissão:</label>
                <input placeholder="Profissão" value={inputProfession} onChange={(event)=>{setInputProfession(event.target.value)}} required></input>
                <label>País:</label>
                <input placeholder="País" value={inputCountry} onChange={(event)=>{setInputCountry(event.target.value)}} required></input>
                <ButtonAFEnviar onClick={onSubmit}>Enviar</ButtonAFEnviar>
            </FormularioAF>
            <ButtonAF onClick={()=>{goToBack(navigate)}}>Voltar</ButtonAF>
            
        </ContainerAF>
    )
}

export default ApplicationFormPage