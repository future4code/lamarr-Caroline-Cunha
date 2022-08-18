import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useForm from '../hooks/useForm';



function LoginPage() {

    const navigate = useNavigate();

    const goToBack = () => {
        navigate(-1);
    };
    const [form, onChange] = useForm({ email: "", senha: "" });

    // const body = {
    //     "email": email,
    //     "password": password
    // }
    const fazerLogin = (event) => {
        event.preventDefault();
    };

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/carol-marques-lamar/login, form")
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error.message));

    console.log(form);


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={fazerLogin}>
                <label htmlFor="email">Email:</label>
                <input
                    name="email"
                    id="email"
                    placeholder="email"
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    required />
                <label htmlFor="senha">Senha:</label>
                <input
                    name="senha"
                    id="senha"
                    placeholder="senha"
                    value={form.senha}
                    onChange={onChange}
                    type="password"
                    pattern="^.{3,}$"
                    title="mínimo de 3 caracteres"
                    required />
                <button type="submit">Login</button>
                <button onClick={goToBack}>Voltar</button>
                <button>Entrar</button>
            </form>
        </div>
    );
}

export default LoginPage;