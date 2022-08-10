import React from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {

    const navigate=useNavigate();

    const goToListPage = () => {
        navigate("/trips/list")
    }

    const goToFormApplicPage = () => {
        navigate("/trips/application")
    }

    const goToLogin = () => {
        navigate("/login")
    }

    const goToAdimHomePage = () => {
        navigate("/adm/trips/list")
    }

    const goToAdimCreate = () => {
        navigate("/adm/trips/create")
    }
    const goToAdimDetails = () => {
        navigate("/adm/trips/:id")
    }


    return (
        <>
            <h1>Página Inicial</h1>
            <button onClick={goToListPage}>Lista de Viagens</button>
            <button onClick={goToFormApplicPage}>Formulário</button>
            <button onClick={goToLogin}>Login</button>
            <button onClick={goToAdimHomePage}>Administrador</button>
            <button onClick={goToAdimCreate}>Criar Novas</button>
            <button onClick={goToAdimDetails}>Detalhes</button>
        </>
    )
}

export default HomePage;