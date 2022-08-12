import React from 'react';
import { useNavigate } from 'react-router-dom';



const LoginPage = () => {

    const navigate=useNavigate();

    const goToBack = () => {
        navigate(-1)
    }


    return (
        <>
            <p>Login</p>
            <button onClick={goToBack}>Voltar</button>
            <button>Entrar</button>
        </>
    )
}

export default LoginPage;