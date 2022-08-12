import React from 'react';
import { useNavigate } from 'react-router-dom';


const TripDetailsPage = () => {

    const navigate=useNavigate();
    
    const goToBack = () => {
        navigate(-1)
    }
   
    return (
        <>
            <p>Detalhes de viagem</p>
            <button onClick={goToBack}>Voltar</button>
            <button>Aprovar</button>
            <button>Desaprovar</button>
        </>
    )
}

export default TripDetailsPage;