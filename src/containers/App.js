import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import '../css/App.css';
import Homepage from './Homepage';
import AboutUsPage from './AboutUsPage';
import OfferPage from './OfferPage';
import HouseDetails from '../components/HouseDetails';
import AddHouseFormPage from './AddHouseFormPage';
import Router from './Router';
import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Router />
    </AppContainer>
  );
}

export default App;
