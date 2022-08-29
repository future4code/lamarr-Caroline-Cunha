import styled from "styled-components";
import planetas from '../img/planetaAstronautas.jpg';
import voo from '../img/vooPlaneta.jpg';
import planets from '../img/linhaConjPlaneta.jpg';





// Pagina de HP - HomePage


export const ContainerHP = styled.body`
    background-color: black;
    background-image: url(${planetas});
    /* background-repeat: no-repeat; */
    background-size: 20%;
    width: 100%;
    height: 500px;
    display: block;

`

export const TituloHP = styled.h1`
    color: white;
    font-size: 120px;
    background-color: black;
`

export const ButtonHP = styled.button`
    color: black;
    background-color: white;
    font-size: 1.5em;
    margin: 1em;
    padding: 1em 0.5em;
    border: 2px solic white;
    border-radius: 3px;


`

// Pagina de LTP - ListTripsPage


export const ContainerLTP = styled.div`
    background-color: #242424;
    background-image: url(${voo});
    background-repeat: no-repeat;
    background-size: 60%;
    width: 90%;
    height: 600px;
    display: block;
    margin-left: 5em;
    margin-right: 10em;
    margin-top: 0;

`

export const TituloLTP = styled.h1`
    color: white;
    text-align: center;
    font-size: 70px;
    margin-left: 2em;
    /* background-color: black; */
`

export const ButtonLTP = styled.button`
    color: black;
    background-color: white;
    font-size: 1.5em;
    /* margin: 1em; */
    padding: 0.5em 0.5em;
    border: 2px solic white;
    border-radius: 3px;
    margin-left: 20em;
    margin-top: 1em;

`

export const ButtonInscrever = styled.button`
    color: black;
    background-color: white;
    font-size: 0.7em;
    /* margin: 1em; */
    margin-left: 2em;
    margin-right: 3em;
    justify-content:right;
    /* padding: 0.5em 0.5em; */
    border: 2px solic white;
    border-radius: 3px;
`

export const ListLetter = styled.p`
    color: white;
    font-size: 2em;
    text-align: right;
`

// Formulário de Aplicação - AF (ApplicationForm)


export const ContainerAF = styled.div`
    background-color: black;
    background-image: url(${planetas});
    /* background-repeat: no-repeat; */
    background-size: 20%;
    width: 80%;
    height: 635px;
    display: block;
    margin-top: 0;
    margin-left: 10em;
    /* margin-right: 5em; */

`

export const TituloAF = styled.p`
    color: white;
    font-size: 70px;
    background-color: black;
    margin-top: 0em;
`

export const FormularioAF = styled.form`
    display: flex;
    flex-direction: column;
    background-color: white;
    color: black;
    width: 40%;
    font-size: 1.5em;
    align-items: center;
    margin-left: 13em;
`

export const ButtonAFEnviar = styled.button`
    color: white;
    background-color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.5em 0.5em;
    border: 2px solic white;
    border-radius: 3px;
`

export const ButtonAF = styled.button`
    color: black;
    background-color: white;
    font-size: 1.5em;
    margin: 1em;
    padding: 0.5em 0.5em;
    border: 2px solic white;
    border-radius: 3px;
    margin-right: 2em;
`


// Pagina Login

export const ContainerLogin = styled.div`
    background-color: black;
    background-image: url(${planets});
    background-repeat: no-repeat;
    background-size: 90%;
    width: 80%;
    height: 635px;
    /* display: block; */
    margin-top: 0;
    margin-left: 10em;
    margin-right: 10em;
    
`

export const TituloLogin = styled.h1`
    color: white;
    font-size: 80px;
    background-color: black;
    margin-top: 0em;
    text-align: left;
    padding-left: 1.5em;
`

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    /* background-color: white; */
    color: white;
    width: 35%;
    font-size: 2em;
    align-items: center;
    margin-left: 0.5em;
`

export const ButtonLoginEnviar = styled.button`
    color: black;
    background-color: white;
    font-size: 0.5em;
    margin: 1em;
    padding: 0.5em 0.5em;
    border: 2px solic white;
    border-radius: 3px;
`

export const ButtonVoltarLogin = styled.button`
    color: black;
    background-color: white;
    font-size: 1.5em;
    padding: 0.5em 0.5em;
    border: 2px solic white;
    border-radius: 3px;
    /* margin-right: 2em; */
    margin-left: 30em;
    margin-top: 5em;
    margin-right: 3em;
`


// Pagina AdimHomePage - AdimHP

export const ContainerAdimHP = styled.div`
    background-color: black;
    background-image: url(${planetas});
    background-repeat: no-repeat;
    background-size: 40%;
    width: 80%;
    height: 635px;
    /* display: block; */
    margin-top: 0;
    margin-left: 10em;
    margin-right: 10em;
    
`

export const TituloAdimHP = styled.h1`
    color: white;
    font-size: 70px;
    background-color: black;
    margin-top: 0em;
    text-align: center;
    padding-left: 1.5em;
`

// export const Form = styled.form`
//     display: flex;
//     flex-direction: column;
//     /* background-color: white; */
//     color: white;
//     width: 35%;
//     font-size: 2em;
//     align-items: center;
//     margin-left: 0.5em;
// `



export const ButtonVoltarAdimHP = styled.button`
    color: black;
    background-color: white;
    font-size: 1.5em;
    padding: 0.5em 0.5em;
    border: 2px solic white;
    border-radius: 3px;
    /* margin-right: 2em; */
    margin-left: 30em;
    /* margin-top: 5em; */
    margin-right: 3em;
`
export const ButtonFormAdimHP = styled.button`
        color: black;
    background-color: white;
    font-size: 1.5em;
    /* margin-top: 12em; */
    margin-right: 2.5em;
    padding: 0.5em 0.5em;
    border: 2px solic white;
    border-radius: 3px;
    justify-content: end;
`

export const ButtonDetailsHP = styled.button`
    color: black;
    background-color: white;
    font-size: 0.7em;
    /* margin: 1em; */
    margin-left: 1em;
    justify-content:right;
    /* padding: 0.5em 0.5em; */
    border: 2px solic white;
    border-radius: 3px;
    margin-bottom: 2em;
`
export const ButtonDeleteHP = styled.button`
    color: black;
    background-color: white;
    font-size: 0.7em;
    /* margin: 1em; */
    margin-left: 0.5em;
    margin-right: 1em;
    justify-content:right;
    /* padding: 0.5em 0.5em; */
    border: 2px solic white;
    border-radius: 3px;
`

export const ListAdimHP = styled.div`
    color: white;
    font-size: 2em;
    text-align: right;
`

// Pagina CreateTripPage - CTP

export const ContainerCTP = styled.div`
    background-color: black;
    background-image: url(${planetas});
    /* background-repeat: no-repeat; */
    background-size: 30%;
    width: 80%;
    height: 635px;
    /* display: block; */
    margin-top: 0;
    margin-left: 10em;
    margin-right: 10em;
    
`

export const TituloCTP = styled.h1`
    color: white;
    font-size: 80px;
    background-color: black;
    margin-top: 0em;
    text-align: center;
    padding-left: 1.5em;
`

export const FormCTP = styled.form`
    display: flex;
    flex-direction: column;
    background-color: white;
    color: black;
    width: 35%;
    font-size: 2em;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-left: 10em;
`

export const ButtonCTPCadastrar = styled.button`
    
    color: white;
    background-color: black;
    font-size: 0.5em;
    margin: 1em;
    padding: 0.5em 0.5em;
    border: 2px solic black;
    border-radius: 3px;
`

export const ButtonCTPVoltar = styled.button`
    color: black;
    background-color: white;
    font-size: 1.5em;
    padding: 0.5em 0.5em;
    border: 2px solic white;
    border-radius: 3px;
    /* margin-right: 2em; */
    margin-left: 30em;
    /* margin-top: 5em; */
    margin-right: 3em;
`