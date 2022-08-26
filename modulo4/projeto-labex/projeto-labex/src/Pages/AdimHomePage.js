import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProtectedPage from '../Hooks/useProtectedPage';



const AdimHomePage = () => {
    
    useProtectedPage ()
    
    const navigate=useNavigate();

    
    const goToAdimCreate = () => {
        navigate("/adm/trips/create")
    }

    // const goToAdimDetails = (id) => {
    //     navigate("/adm/trips/:id")
    // } 
    const goToAdimDetails = (id) => {
        navigate(`/adm/trips/${id}`)
    }

    const goToBack = () => {
        navigate(-1)
    }

    // const goToAdimHomePage = () => {
    //     navigate("/adm/trips/list")
    // }

    return (
        <>
            <p>Painel do Administrador</p>
            <button onClick={goToBack}>Voltar</button>
            <button onClick={goToAdimCreate}>Criar Novas</button>
            {/* <button onClick={goToAdimDetails}>Detalhes</button> */}
            <button onClick={()=>{goToAdimDetails("id")}}>Detalhes</button>
         
        </>
    )
}

export default AdimHomePage;



// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import useProtectedPage from '../Hooks/useProtectedPage';
// import useRequestData from '../Hooks/UseRequestData';
// import { BASE_URL } from '../constants/constants';




// const AdimHomePage = () => {
    
//     useProtectedPage ()
    
//     const navigate=useNavigate();
    
//     const [data, isLoading, error, getData] = useRequestData(`${BASE_URL}/trips`)

//     useEffect(()=>{
//         getData()
//     }, [])

//     const mapList = data && data.trips.map((item)=>{
//         return (
//             <div key={item.id}>
//             <div>{item.name}</div>
//             <button></button>
//             </div>
//         )

//     })
//     const goToAdimCreate = () => {
//         navigate("/adm/trips/create")
//     }

     
//     const goToAdimDetails = (id) => {
//         navigate(`/adm/trips/${id}`)
//     }

//     const goToBack = () => {
//         navigate(-1)
//     }

    

//     return (
//         <>
//             <p>Painel do Administrador</p>
//             <button onClick={goToBack}>Voltar</button>
//             <button onClick={goToAdimCreate}>Criar Novas</button>
//             <button onClick={goToAdimDetails}>Detalhes</button>
//             {/* <button onClick={Routes.goToAdimDetails(navigate.item.id)}>Detalhes</button> */}
//             {/* <button onClick={()=> goToAdimDetails(navigate.item.id)}}>Detalhes</button> */}
         
//         </>
//     )
// }

// export default AdimHomePage;




// import React, { useEffect } from 'react';
// import { useNavigate} from 'react-router-dom';
// import useProtectedPage from '../Hooks/useProtectedPage';
// import useRequestData from '../Hooks/UseRequestData';
// import { BASE_URL } from '../constants/constants';


// const AdimHomePage = () => {
    
//     useProtectedPage ()
    
//     const navigate=useNavigate();
   
    
   
//     const [data, isLoading, error] = useRequestData(`${BASE_URL}/trips`)

//     const adimPage = dataAdimPage&&dataAdimPage.trips.map((item)=>{
//         return(
//         <div key={item.id}>
//              {item.name}
//              <buttton onClick={()=>(goToDetailsPage(navigate))}>Aprovar</buttton>
//              <button>Reprovar</button> 
//         </div>
//         )
//     })

//     // useEffect(()=>{
//     //     getData()
//     // }, [])

//     // // const mapList = data && data.trips.map((item)=>{
    
    
//     const goToAdimCreate = () => {
//         navigate("/adm/trips/create")
//     }

     
//     const goToAdimDetails = (id) => {
//         navigate(`/adm/trips/${id}`)
//     }

//     const goToBack = () => {
//         navigate(-1)
//     }

    


//     return (
//         <>
//             <p>Painel do Administrador</p>
//             <button onClick={goToBack}>Voltar</button>
//             <button onClick={goToAdimCreate}>Criar Novas</button>
//             <button onClick={goToAdimDetails}>Detalhes</button>
//             {/* <button onClick={Routes.goToAdimDetails(navigate.item.id)}>Detalhes</button> */}
//             {/* <button onClick={()=> goToAdimDetails(navigate.item.id)}}>Detalhes</button> */}
         
//         </>
//     )
// }

// export default AdimHomePage;