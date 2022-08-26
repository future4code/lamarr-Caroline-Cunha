import React from 'react';
import { useNavigate} from 'react-router-dom';
import useProtectedPage from '../Hooks/useProtectedPage';
import useRequestData from '../Hooks/UseRequestData';
import { BASE_URL } from '../constants/constants';
import axios from 'axios';
import { goToBack, goToAdimCreate, goToTripDetailsPage } from '../constants/coordinator';


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
        return <div key={data.id}>{data.name}
        <button onClick={()=>{goToTripDetailsPage(navigate)}}>Detalhes</button>
        <button onClick={()=>{deleteTrip(data.id)}}>Deletar Viagem</button></div>
        
    })
   
    return(
    <div>
    <h1>Área Administrativa</h1>
    
    {requisitionTrip}
    
    <button onClick={()=>{goToBack(navigate)}}>Voltar</button>
    <button onClick={()=>{goToAdimCreate(navigate)}}>Formulário</button>

    </div>
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



