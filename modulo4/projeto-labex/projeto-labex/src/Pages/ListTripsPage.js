import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants/constants';
import useRequestData from '../Hooks/UseRequestData';
import { goToFormApplicPage, goToBack} from '../constants/coordinator';



const ListTripsPage = () => {

    const [dataListTrip, isLoadingUser, errorUser] = useRequestData(`${BASE_URL}trips`)
   
    const listTrip = dataListTrip&&dataListTrip.trips.map ((trip)=>{
    return<li key={trip.id}>{trip.name}<button onClick={()=>{goToFormApplicPage(navigate)}}>Inscrever-se</button></li>
    })

      
    const navigate=useNavigate();
    
        
    return (

        <div>
            <h1>Lista de Viagens</h1>
                    
            {isLoadingUser&&"....Carregando!"}
            <>
            <ul>{!isLoadingUser&&!dataListTrip&&listTrip}</ul>
            </>
            {!isLoadingUser&&!dataListTrip&&errorUser}
        </div>
    )
}

export default ListTripsPage;