import  {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios'

const useRequestData = (url)=>{
    const [data, setData]=useState(undefined)
    const [isLoading, setIsLoading]=useState(false)
    const [error, setError]=useState("")
    
    useEffect(() => {
        getData()
    }, [])
    
    const getData = () => {
        setIsLoading(true)
        axios.get(url,
            {
            headers: {
                auth:localStorage.getItem("token")
            }})
        .then((response) =>{
            setIsLoading(false)
            setData(response.data)
            })
        .catch((error)=>{
            setIsLoading(false)
            setError(error)
            console.log(error.response.data)
    })
}
        
       
    return [data, isLoading, error, getData]
}

export default useRequestData;




// import  {useEffect, useState} from 'react';
// import axios from 'axios'

// const useRequestData = (url)=>{
//     const [data, setData]=useState(undefined)
//     const [isLoading, setIsLoading]=useState(undefined)
//     const [error, setError]=useState(undefined)
//     useEffect(() => {
//         setIsLoading(true);
//         axios.get(`${url}`).then(response =>{
//             setData(response.data)
//         }).catch(error=>{
//             setIsLoading(false)
//             setError(error)
//         })

//     }, [url])

//     return [data, isLoading, error];

// }

// export default useRequestData;


