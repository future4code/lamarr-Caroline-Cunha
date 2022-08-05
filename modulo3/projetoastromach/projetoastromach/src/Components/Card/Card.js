import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: ivory;
  padding: 10px;
  margin: 5px;
  text-align: center;
  
  img{
    max-width: 200px;
  }

  h2, p {
    color: var(--deep-blue)
  
  }

`

function Card (props) {
  const {id, age, name, photo, bio} = props
    return(
        <CardContainer>
          <p>{age}</p>
          <h2>{name}</h2>
          <img src={photo} alt='foto'/>
          <p>{bio}</p>
          <div>
            <button>Adicionar</button>
            <button>Remover</button>
          </div>
        </CardContainer>
    )

}

export default Card;