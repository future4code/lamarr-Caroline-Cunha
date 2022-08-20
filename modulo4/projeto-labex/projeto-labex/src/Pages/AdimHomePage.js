import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProtectedPage from '../Hooks/useProtectedPage';




const AdimHomePage = () => {
    
    useProtectedPage ()
    
    const navigate=useNavigate();

    
    const goToAdimCreate = () => {
        navigate("/adm/trips/create")
    }

    const goToAdimDetails = (id) => {
        navigate("/adm/trips/:id")
    } 
    // const goToAdimDetails = (id) => {
    //     navigate(`/adm/trips/${id}`)
    // }

    const goToBack = () => {
        navigate(-1)
    }

    // const goToAdimHomePage = () => {
    //     navigate("/adm/trips/list")
    // }


    return (
        <>
            <p>Painel do Administrador</p>
            <button onClick={goToBack}>Voltar</button>
            <button onClick={goToAdimCreate}>Criar Novas</button>
            <button onClick={goToAdimDetails}>Detalhes</button>
            {/* <button onClick={()=>{goToAdimDetails("id")}}>Detalhes</button> */}
         
        </>
    )
}

export default AdimHomePage;