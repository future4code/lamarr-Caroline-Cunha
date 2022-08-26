import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useProtectedPage from '../Hooks/useProtectedPage';
import useForm from '../Hooks/useForm';
import { BASE_URL } from '../constants/constants';
import { goToBack } from '../constants/coordinator';




const CreateTripPage = () => {

    useProtectedPage ()  
   
    const navigate=useNavigate();

    const [form, onChange, clear] = useForm({name:"", planet:"", description:"", durationInDays:""})

   const newTrip = (event)=>{
    event.preventDefault()
    const body={
        name:form.name,
        planet:form.planet,
        date:form.date,
        description:form.description,
        durationInDays:form.durationInDays
    }
    console.log(body);
   
        axios.post(
            `${BASE_URL}trips`, body,
            {headers: {
                    auth:localStorage.getItem('token')}})
            .then((response)=>{
                alert("Viagem cadastrada com sucesso!")
                clear();
            })
            .catch((error)=>console.log(error))
    }
    
    // const goToBack = () => {
    //     navigate(-1)
    // }

 
    return (
        <>
            <h1>Criar Novas Viagens</h1>
            <form onSubmit={newTrip}>
                <h1>Registrar nova viagem</h1>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' value={form.name} id="name" onChange={onChange} required/>
                <label htmlFor="planet">Destino:</label>
                <input type="text" name='planet' value={form.planet} id="planet" onChange={onChange} required/>
                <label htmlFor="date">Data:</label>
                <input type="text" name='date' value={form.date} id="date" onChange={onChange} required/>
                <label htmlFor="description">Descrição:</label>
                <input type="text" name='description' value={form.description} id="description" onChange={onChange} required/>
                <label htmlFor="durationInDays">Duração:</label>
                <input type="text" name='durationInDays' value={form.durationInDays} id="durationInDays" onChange={onChange} required/>
                
                <button>Cadastrar viagem</button>
            </form>
            <button onClick={()=>{goToBack(navigate)}}>Voltar</button>
        </>
    )
}

export default CreateTripPage;