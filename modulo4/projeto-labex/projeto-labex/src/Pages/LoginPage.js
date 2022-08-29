import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useForm from '../Hooks/useForm';
// import { clear } from '@testing-library/user-event/dist/clear';
import {BASE_URL} from '../constants/constants';
import { goToBack } from '../constants/coordinator';
import { ContainerLogin, TituloLogin, FormLogin, ButtonLoginEnviar, ButtonVoltarLogin } from '../Components/style';




const LoginPage = () => {
    
    const [form, onChange, clear] = useForm({email: "", password: "" })
    
    const navigate = useNavigate();

         
    const fazerLogin = (event) => {
        event.preventDefault();
       
        axios.post(`${BASE_URL}login`, form)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            navigate("/admin/trips/list")
        })
        .catch((error) => console.log(error.message))

        clear();

    }

     return (
        <ContainerLogin>
            <TituloLogin>Login</TituloLogin>
            <FormLogin onSubmit={fazerLogin}>
                <label htmlFor="email">E-mail:</label>
                <input
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    required 
                />

                <label htmlFor="senha">Senha:</label>
                <input
                    name="password"
                    id="senha"
                    placeholder="Senha"
                    value={form.senha}
                    onChange={onChange}
                    type="password"
                    pattern="^.{3,}$"
                    title="mínimo de 3 caracteres"
                    required 
                />
                <ButtonLoginEnviar type="submit">Enviar</ButtonLoginEnviar>             
            </FormLogin>
            <ButtonVoltarLogin onClick={()=>{goToBack(navigate)}}>Voltar</ButtonVoltarLogin>
        </ContainerLogin>
    )};


export default LoginPage;