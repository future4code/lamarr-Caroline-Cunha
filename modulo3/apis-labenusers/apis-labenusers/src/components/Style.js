import styled from "styled-components";

/////////////////////////////// LabFy

// export const Display=styled.div`
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
// export const PlayList=styled.ul`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
    
//     list-style: none;
//     width: 100%;
// `
// export const ItemPlayList=styled.li`
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
export const IconePlay=styled.img`
    width:1.4vw;
    margin-right: 1.5vw;
    :hover{
        transition-duration: 0.3s;
        width: 1.7vw;
    }
`
// export const FormPlay=styled.form`
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

// export const ButtonAddPlay=styled.button`
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
export const ButtonDeletePlay=styled.button`
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    background-color: orangered;
    border-radius: 0.4vw;
    :active{
        background-color: lightcyan;
        color: black;
    }
`