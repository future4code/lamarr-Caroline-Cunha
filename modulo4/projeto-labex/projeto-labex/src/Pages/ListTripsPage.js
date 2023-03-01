import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants/constants';
import useRequestData from '../Hooks/UseRequestData';
import { goToFormApplicPage, goToBack} from '../constants/coordinator';
import { ButtonLTP, ContainerLTP, TituloLTP, ButtonInscrever, ListLetter } from '../Components/style';



const ListTripsPage = () => {

    const [dataListTrip, isLoadingUser, errorUser] = useRequestData(`${BASE_URL}trips`)
   
    const listTrip = dataListTrip&&dataListTrip.trips.map ((trip)=>{
    return(
    <ListLetter key={trip.id}>
        {trip.name}
        <ButtonInscrever onClick={()=>{goToFormApplicPage(navigate)}}>Inscrever-se</ButtonInscrever>
    </ListLetter>
    )
    })

      
    const navigate=useNavigate();
    
        
    return (

        <ContainerLTP>
            <TituloLTP>Lista de Viagens</TituloLTP>
            {listTrip}
                    
            {/* {isLoadingUser&&"....Carregando!"}
            <>
            <ul>{!isLoadingUser&&!dataListTrip&&listTrip}</ul>
            </>
            {!isLoadingUser&&!dataListTrip&&errorUser} */}
            <ButtonLTP onClick={()=>{goToBack(navigate)}}>Voltar</ButtonLTP>
        </ContainerLTP>
    )
}

export default ListTripsPage;