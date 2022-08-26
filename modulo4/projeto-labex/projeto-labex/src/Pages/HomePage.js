import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToLogin, goToListPage } from '../constants/coordinator';



const HomePage = () => {

    const navigate=useNavigate();

    // const goToListPage = () => {
    //     navigate("/trips/list")
    // }

    //     const goToLogin = () => {
    //     navigate("/login")
    // }
          

    return (
        <>
            <h1>LabeX</h1>
            <button onClick={()=>{goToListPage(navigate)}}>Lista de Viagens</button>
            <button onClick={()=>{goToLogin(navigate)}}>Administrador</button>
                       
        </>
    )
}

export default HomePage;