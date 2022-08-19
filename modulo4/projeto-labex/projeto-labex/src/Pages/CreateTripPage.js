import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useProtectedPage from '../Hooks/useProtectedPage';



const CreateTripPage = () => {

    useProtectedPage ()  
   
    const navigate=useNavigate();

    const goToBack = () => {
        navigate(-1)
    }

    

    return (
        <>
            <p>Página de Novas Viagem</p>
            <button onClick={goToBack}>Voltar</button>
            <button>Criar</button>
        </>
    )
}

export default CreateTripPage;