import React from 'react';
import { useNavigate} from 'react-router-dom';
import useProtectedPage from '../Hooks/useProtectedPage';
import useRequestData from '../Hooks/UseRequestData';
import { BASE_URL } from '../constants/constants';
import axios from 'axios';
import { goToBack, goToAdimCreate, goToTripDetailsPage } from '../constants/coordinator';
import { ContainerAdimHP, TituloAdimHP, ButtonVoltarAdimHP, ButtonFormAdimHP, ButtonDetailsHP, ButtonDeleteHP, ListAdimHP} from '../Components/style';


export function AdimHomePage () {
    useProtectedPage()
    const navigate=useNavigate();

    const [dataTrip] = useRequestData(`${BASE_URL}trips`);
    const token = localStorage.getItem("token");
    const headers = {
        headers:{
            auth:token,
        },
    }
    const deleteTrip = (id)=>{
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carol-marques-lammar/trips/${id}`, headers)
        .then((response) => console.log(response.data), alert("Viagem enviada!"))
        .catch((error) => console.log(error.menssage))
    }

    const requisitionTrip = dataTrip&&dataTrip.trips.map((data)=>{
        return <ListAdimHP key={data.id}>{data.name}
        <ButtonDetailsHP onClick={()=>{goToTripDetailsPage(navigate)}}>Detalhes</ButtonDetailsHP>
        <ButtonDeleteHP onClick={()=>{deleteTrip(data.id)}}>Deletar Viagem</ButtonDeleteHP></ListAdimHP>
        
    })
   
    return(
    <ContainerAdimHP>
    <TituloAdimHP>Área Administrativa</TituloAdimHP>
    
    {requisitionTrip}
    
    <ButtonVoltarAdimHP onClick={()=>{goToBack(navigate)}}>Voltar</ButtonVoltarAdimHP>
    <ButtonFormAdimHP onClick={()=>{goToAdimCreate(navigate)}}>Formulário</ButtonFormAdimHP>

    </ContainerAdimHP>
    )
}




// const AdimHomePage = () => {
//     useProtectedPage ()
    
//     const navigate=useNavigate();
    
//     const [dataTrip] = useRequestData(`${BASE_URL}trips`);

//     const token=localStorage.getItem("token")

//     const headers={
//         headers:{
//             auth:token,
//         },
//     }

//     const deleteTrip=(id)=>{
//         axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carol-marques-lammar/trips/${id}`, headers)
//         .then((response)=>console.log(response.data),
//             alert("Viagem enviada!"))
//         .catch((error)=>console.log(error.menssage))
//         }

    
//     const requisitionTrip = dataTrip&&dataTrip.trips.map((data)=>{
//         return (
//             <div key={data.id}>
//                 {data.name}
//                 <button onClick={()=>{goToTripDetailsPage(navigate)}}>Detalhes</button>
//                 <button onClick={()=>{deleteTrip(data.id)}}>Deletar viagem</button>
//             </div>
//         )
//     }) 
    
//     return (
//                 <>
//                     <h1>Área Administrativa</h1>
//                     {requisitionTrip}
//                     <button onClick={()=>{goToBack(navigate)}}>Voltar</button>
//                     <button onClick={()=>{goToAdimCreate(navigate)}}>Formulário</button>
//                 </>
//             )        
        
//    }  
    
// export default AdimHomePage;



