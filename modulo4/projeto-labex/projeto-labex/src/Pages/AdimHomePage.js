import React from 'react';
import { useNavigate } from 'react-router-dom';



const AdimHomePage = () => {
    
    const navigate=useNavigate();

    const goToAdimCreate = () => {
        navigate("/adm/trips/create")
    }

    const goToLogin = () => {
        navigate("/login")
    }

    const goToAdimDetails = () => {
        navigate("/adm/trips/:id")
    }

    const goToBack = () => {
        navigate(-1)
    }


    return (
        <>
            <p>Painel do Administrador</p>
            <button onClick={goToBack}>Voltar</button>
            <button onClick={goToAdimCreate}>Criar Novas</button>
            <button onClick={goToLogin}>Login</button>
            <button onClick={goToAdimDetails}>Detalhes</button>
         
        </>
    )
}

export default AdimHomePage