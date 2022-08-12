import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants/constants';
import useRequestData from '../Hooks/UseRequestData';



const ListTripsPage = () => {

    const [dataListTrip, isLoading, erro] = useRequestData(`${BASE_URL}trips`)
  
    const listTrip = dataListTrip&&dataListTrip.trips.map ((trip)=>{
    return<p>{trip.name}</p>
    }) 


    const navigate=useNavigate();
    const goToFormApplicPage = () => {
        navigate("/trips/application")
    }
    const goToBack = () => {
        navigate(-1)
    }

    
    return (
        <div>
            <h1>Lista de Viagens</h1>
            {isLoading&&"....Carregando!"}
            <ul>{!isLoading&&!dataListTrip&&listTrip}</ul>
            {!isLoading&&!dataListTrip&&erro}
            <button onClick={goToBack}>Voltar</button>
            <button onClick={goToFormApplicPage}>Inscrever-se</button>
        </div>
    )
}

export default ListTripsPage;