import React from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {

    const navigate=useNavigate();

    const goToListPage = () => {
        navigate("/trips/list")
    }

    const goToAdimHomePage = () => {
        navigate("/adm/trips/list")
    }

              

    return (
        <>
            <h1>LabeX</h1>
            <button onClick={goToListPage}>Lista de Viagens</button>
            <button onClick={goToAdimHomePage}>Administrador</button>
                       
        </>
    )
}

export default HomePage;