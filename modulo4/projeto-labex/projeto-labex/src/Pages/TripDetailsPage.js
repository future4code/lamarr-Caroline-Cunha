import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useProtectedPage from '../Hooks/useProtectedPage';


const TripDetailsPage = () => {

    useProtectedPage ()

    useEffect (() => {

        const token = localStorage.getItem("token");

        axios.get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/:id`,
            {
                headers: {
                    auth: token
                }
            }).then((response)=>{
                console.log(response.data)
            }).catch((error)=>{
                console.log("Deu erro: ", error.response)
            })
    }, [])


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