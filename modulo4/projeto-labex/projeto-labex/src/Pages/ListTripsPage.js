import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants/constants';
import useRequestData from '../Hooks/UseRequestData';
import { goToFormApplicPage, goToBack} from '../constants/coordinator';



const ListTripsPage = () => {

    const [dataListTrip, isLoadingUser, errorUser] = useRequestData(`${BASE_URL}trips`)
   
    const listTrip = dataListTrip&&dataListTrip.trips.map ((trip)=>{
    return(
    <p key={trip.id}>
        {trip.name}
        <button onClick={()=>{goToFormApplicPage(navigate)}}>Inscrever-se</button>
    </p>
    )
    })

      
    const navigate=useNavigate();
    
        
    return (

        <div>
            <h1>Lista de Viagens</h1>
            {listTrip}
                    
            {/* {isLoadingUser&&"....Carregando!"}
            <>
            <ul>{!isLoadingUser&&!dataListTrip&&listTrip}</ul>
            </>
            {!isLoadingUser&&!dataListTrip&&errorUser} */}
            <button onClick={()=>{goToBack(navigate)}}>Voltar</button>
        </div>
    )
}

export default ListTripsPage;