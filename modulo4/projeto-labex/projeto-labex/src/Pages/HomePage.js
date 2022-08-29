import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToLogin, goToListPage } from '../constants/coordinator';
import { ButtonHP, ContainerHP, TituloHP } from '../Components/style';



const HomePage = () => {

    const navigate=useNavigate();

    

    return (
        <ContainerHP>
            <div>
                <TituloHP>LabeX</TituloHP>
            </div>
            <div>
                <ButtonHP onClick={()=>{goToListPage(navigate)}}>Lista de Viagens</ButtonHP>
                <ButtonHP onClick={()=>{goToLogin(navigate)}}>Administrador</ButtonHP>
            </div>     
        </ContainerHP>
    )
}

export default HomePage;