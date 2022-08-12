import React, {useEffect, useState} from 'react';
import axios from 'axios'

const useRequestData = (url)=>{
    const [data, setData]=useState(undefined)
    const [isLoading, setIsLoading]=useState(undefined)
    const [erro, setErro]=useState(undefined)
    useEffect(() => {
        setIsLoading(true);
        axios.get(`${url}`).then(response =>{
            setData(response.data)
        }).catch(error=>{
            setIsLoading(false)
            setErro(error)
        })

    }, [url])

    return [data, isLoading, erro];

}

export default useRequestData;