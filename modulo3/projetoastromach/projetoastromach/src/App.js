
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import Homepage from './Components/Pages/Homepage';
import Detailspage from './Components/Pages/Detailspage';
import styled from 'styled-components';
import { GlobalStyle } from './Components/GlobalStyle';
import axios from 'axios';
import React, { useState, useEffect } from 'react';



function App() {

    
  return (
    <div className="App">
      
      <GlobalStyle/>
      <Header/>
      <Homepage/>
      
    </div>
  );
}

export default App;
