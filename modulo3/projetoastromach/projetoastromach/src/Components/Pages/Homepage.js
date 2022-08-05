import React, {useEffect, useState}  from "react";
import Card from "../Card/Card";
import styled from "styled-components";
import axios from 'axios';

const HomepageContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
`

const Homepage = () => {
    const [myList, setMyList] = useState ([]);
    

    
    return (
            <HomepageContainer>
                <Card
                    id={''}
                    age={'36 anos'}
                    name={'Cesar'}
                    photo={''}
                    bio={'lindo'}
                />
            </HomepageContainer>
        )
}

export default Homepage;



    // const componentLista=myList.map((item, index)=>{
  
    // const url='https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person'
    // const 