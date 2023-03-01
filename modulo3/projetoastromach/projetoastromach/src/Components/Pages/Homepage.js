import React, {useEffect, useState}  from "react";
import Card from "../Card/Card";
import styled from "styled-components";
import axios from 'axios';


const HomepageContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
`

const Homepage = () => {
    
    const getProfileToChoose = () => {
        axios.get ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carol/person")
        .then((response)=> console.log(response.data))
        .catch((error) => console.log(error.message.data))
            
    }
        
    const [myList, setMyList] = useState ([]);
    const componentLista=myList.map((item, index)=>{

        return (
            <HomepageContainer>
                <Card
                    id={item.id}
                    age={item.age}
                    name={item.name}
                    photo={item.photo}
                    bio={item.bio}
                />
            </HomepageContainer>
        )
    })

    useEffect(() => {
        getProfileToChoose()
    }, [] 
    )
     
     return(
        <div>
            {componentLista}
        </div>
    )
}

export default Homepage;
