import React, {useEff, useEffect, useState} from 'react';
import axios from 'axios';

// import styled from 'styled-components';


// const Display=styled.div`
//     h1{
//         text-transform: uppercase;
//         color: #FF8C00;
//         text-shadow: 2px 2px 2px darkblue;
//         display: inline-block;
//     }
//     background-color: lightcyan;
//     display: flex;
//     flex-direction: column;
//     margin: 10px ;
//     padding: 10px;
//     width:max-content;
//     border: 4px solid orange;
//     border-radius: 20px;
// `
// const UsersList=styled.ul`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
    
//     list-style: none;
//     width: 100%;
// `
// const ItemUserList=styled.li`
//         display: flex;
//         align-items: center;
//         justify-content: start;
//         padding: 0.3vw 2vw;
//         font-size: 1.7vw;
//         color: white;
//         text-shadow: 1px 1px black;
//         font-weight: bold;
//         :nth-child(1n){background-color: violet;}
//         :nth-child(2n){background-color: darkviolet;}
//         :hover{
//             transition-duration: 0.3s;
//             font-size: 2vw;
//             color: lightgreen;
//         }
// `
// const FormUser=styled.form`
//     margin-top: 3vh;
//     display: grid;
//     grid-template-rows: 1fr 1fr 1fr;
//     grid-template-columns: 1fr 1fr ;
//     text-align: center;
//     row-gap: 2vh;
//     input{
//         border: 1px solid black;
//         border-radius: 5px;
//         grid-column-start: 1;
//         grid-column-end: 3;
//         font-size: 1.5vw;
//         padding: 0.3vh 0.5vw;
//     }
// `

// const ButtonAddUser=styled.button`
//     color: white;
//     font-weight: bold;
//     text-transform: uppercase;
//     background-color: green;
//     border-radius: 0.4vw;
//     :active{
//         background-color: lightcyan;
//         color: black;
//     }
// `

const Lista = () => {

    const [myList, setMyList] = useState ([]);
    const [myInputName, setMyInputName] = useState ("")
    const [myInputEmail, setMyInputEmail] = useState ("")



    const atualizaInputName = (event) => {
        setMyInputName(event.targe.value)
    }

    const atualizaInputEmail = (event) => {
        setMyInputEmail(event.targe.value)
    }



    const componentList=myList.map ((item,index)=>{
            return(
                <ul key={index}>
                    {item.name}
                </ul>
            )
    })
    
    useEffect(()=>{
        getUsersList()
    }, []
    )

    const bodyList = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const myHeaders= {
        headers: {
            Authorization: 'carol-marques-lammar'
        }
    }

    const getUsersList = () => {
            axios.get(bodyList, myHeaders)
            .then((response)=>{
               setMyList(response.data);
            })
    }

    const body={
        "name": myInputName,
        "email": myInputEmail,
    }

    
   
    const postUserList = () => {
        axios.post(bodyList,body,myHeaders)
        .then(()=>{
            alert("Sucesso")
        })
        .catch((erro)=>{
            alert("Desculpe. Algo deu errado!")
        })
    }

    return (

       <div>
        <h1>Cadastro de Participantes da Rebelião</h1>
        <ul>
            {componentList}
        </ul>
        <form>
            <label>Digite seu nome:</label>
            <input type='text' placeholder='Nome' value={myInputName} onChange={atualizaInputName}></input>
            <label>Digite seu email:</label>
            <input type='text' placeholder='Email' value={myInputEmail} onChange={atualizaInputEmail}></input>
            <button onClick={postUserList}>Adicionar Usuário</button>
            <button>Voltar para página inicial</button>
        </form>
       </div>
    )
}

export default Lista;