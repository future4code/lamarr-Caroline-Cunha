import React from 'react';
import { useNavigate } from 'react-router-dom';



const ApplicationFormPage = () => {

    const navigate=useNavigate();

    const goToBack = () => {
        navigate(-1)
    }

    
    
    return (
        <>
            <p>Formulário de Aplicação</p>
            <button onClick={goToBack}>Voltar</button>
            <button>Enviar</button>
        </>
    )
}

export default ApplicationFormPage