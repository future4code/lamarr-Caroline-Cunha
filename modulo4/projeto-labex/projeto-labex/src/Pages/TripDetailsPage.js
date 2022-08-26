import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import useProtectedPage from '../Hooks/useProtectedPage';
import { goToBack } from '../constants/coordinator';



const TripDetailsPage = () => {

    useProtectedPage ()

    const  { id } = useParams ()
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/NoIFVcOiSgTKTIPVZwXS`
    const [tripDetail, setTripDetail] = useState (null)

    let content = null
 
    useEffect (() => {

        const token = localStorage.getItem("token");

        axios.get(url,
            {
                headers: {
                    auth: token
                }
            }).then((response)=>{
                console.log(response.data)
                setTripDetail(response.data)
            }).catch((error)=>{
                console.log("Deu erro: ", error.response)
            })
    }, []);

    const navigate=useNavigate();

    const pathParams = useParams();
    
    // const goToBack = () => {
    //     navigate(-1)
    // }
   
    return (
        <>
            {/* <p>Detalhes de viagem</p> */}
            <p>Detalhes de viagem</p>
            <button onClick={()=>{goToBack(navigate)}}>Voltar</button>
            <button>Aprovar</button>
            <button>Desaprovar</button>
        </>
    )
}

export default TripDetailsPage;

