import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const ApplicationFormPage = () => {

    const navigate=useNavigate();

    const goToBack = () => {
        navigate(-1)
    }

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
        <>
            <p>Formulário de Aplicação</p>
            <form onSubmit={onSubmit}>
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
                <button onClick={onSubmit}>Enviar</button>
            </form>
            <button onClick={goToBack}>Voltar</button>
            
        </>
    )
}

export default ApplicationFormPage