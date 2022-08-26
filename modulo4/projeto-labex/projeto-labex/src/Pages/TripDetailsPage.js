import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import useProtectedPage from '../Hooks/useProtectedPage';



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
                // setTripDetail(response.data)
            }).catch((error)=>{
                console.log("Deu erro: ", error.response)
            })
    }, []);

    const navigate=useNavigate();

    const pathParams = useParams();
    
    const goToBack = () => {
        navigate(-1)
    }
   
    return (
        <>
            {/* <p>Detalhes de viagem</p> */}
            <p>Detalhes de viagem</p>
            <button onClick={goToBack}>Voltar</button>
            <button>Aprovar</button>
            <button>Desaprovar</button>
        </>
    )
}

export default TripDetailsPage;


// import React, { useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import useProtectedPage from '../Hooks/useProtectedPage';


// const TripDetailsPage = () => {

//     useProtectedPage ()

//     useEffect (() => {

//         const token = localStorage.getItem("token");

//         axios.get(
//             `https://us-central1-labenu-apis.cloudfunctions.net/labeX/carol-marques-lammar/trip/:id`,
//             {
//                 headers: {
//                     auth: token
//                 }
//             }).then((response)=>{
//                 console.log(response.data)
//             }).catch((error)=>{
//                 console.log("Deu erro: ", error.response)
//             })
//     }, [])


//     const navigate=useNavigate();

//     // const pathParams = useParams();
    
//     const goToBack = () => {
//         navigate(-1)
//     }
   
//     return (
//         <>
//             <p>Detalhes de viagem</p>
//             {/* <p>Detalhes de viagem {pathParams.id}</p> */}
//             <button onClick={goToBack}>Voltar</button>
//             <button>Aprovar</button>
//             <button>Desaprovar</button>
//         </>
//     )
// }

// export default TripDetailsPage;

// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import useProtectedPage from '../Hooks/useProtectedPage';




// const TripDetailsPage = () => {

//     useProtectedPage ()

//     const  { id } = useParams ()
//     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/NoIFVcOiSgTKTIPVZwXS`
//     const [tripDetail, setTripDetail] = useState (null)

//     let content = null
 
//     useEffect (() => {

//         const token = localStorage.getItem("token");

//         axios.get(url,
//             {
//                 headers: {
//                     auth: token
//                 }
//             }).then((response)=>{
//                 console.log(response.data)
//             }).catch((error)=>{
//                 console.log("Deu erro: ", error.response)
//             })
//     }, [])


//     const navigate=useNavigate();

//     const pathParams = useParams();
    
//     const goToBack = () => {
//         navigate(-1)
//     }
   
//     return (
//         <>
//             {/* <p>Detalhes de viagem</p> */}
//             <p>Detalhes de viagem {pathParams.id}</p>
//             <button onClick={goToBack}>Voltar</button>
//             <button>Aprovar</button>
//             <button>Desaprovar</button>
//         </>
//     )
// }

// export default TripDetailsPage;


// última tentativa

// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import useProtectedPage from '../Hooks/useProtectedPage';
// import { BASE_URL } from '../constants/constants';




// const TripDetailsPage = () => {

//     useProtectedPage ()

//     const navigate=useNavigate();

//     const pathParams = useParams();

    

//     // const  { id } = useParams ()
    
//     // const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/${id}`
//     // const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/NoIFVcOiSgTKTIPVZwXS`

//     const [tripDetail, setTripDetail] = useState (null)

//     // let content = null
 
//     useEffect (() => {

//         const header = {
//             headers: {
//                 auth: token
//             }
//         }

//     const token = localStorage.getItem("token");

//         axios.get(`${BASE_URL}trip/${pathParams.id}`, header)
//             .then((response)=>{
//                 console.log(response.data)
//                 setTripDetail(response.data)
//             }).catch((error)=>{
//                 console.log("Deu erro: ", error.response)
//             })
//     }, []);


// //     axios.get(url,
// //         {
// //             headers: {
// //                 auth: token
// //             }
// //         }).then((response)=>{
// //             console.log(response.data)
// //             setTripDetail(response.data)
// //         }).catch((error)=>{
// //             console.log("Deu erro: ", error.response)
// //         })
// // }, []);


    
    
//     const goToBack = () => {
//         navigate(-1)
//     }
   
//     return (
//         <>
//             <p>Detalhes de viagem{pathParams.id}</p>
//             {/* <p>Detalhes de viagem</p> */}
//             <button onClick={goToBack}>Voltar</button>
//             <button>Aprovar</button>
//             <button>Desaprovar</button>
//         </>
//     )
// }

// export default TripDetailsPage;