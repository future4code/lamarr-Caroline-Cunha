import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AdimHomePage from '../Pages/AdimHomePage';
import ApplicationFormPage from '../Pages/ApplicationFormPage';
import CreateTripPage from '../Pages/CreateTripPage';
import HomePage from '../Pages/HomePage';
import ListTripsPage from '../Pages/ListTripsPage';
import LoginPage from '../Pages/LoginPage';
import TripDetailsPage from '../Pages/TripDetailsPage';


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/trips/list" element={<ListTripsPage/>}/>
                <Route path="/trips/application" element={<ApplicationFormPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/adm/trips/list" element={<AdimHomePage/>}/>
                <Route path="/adm/trips/create" element={<CreateTripPage/>}/>                
                <Route path="/adm/trips/:id" element={<TripDetailsPage/>}/>
            </Routes>     
        </BrowserRouter>
    )

}

export default Rotas;