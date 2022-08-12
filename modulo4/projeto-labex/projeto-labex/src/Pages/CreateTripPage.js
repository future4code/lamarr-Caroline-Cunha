import React from 'react';
import { useNavigate } from 'react-router-dom';




const CreateTripPage = () => {

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