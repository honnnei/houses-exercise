import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import Homepage from './Homepage';
import AboutUsPage from './AboutUsPage';
import OfferPage from './OfferPage';
import HouseDetails from '../components/HouseDetails';
import AddHouseFormPage from './AddHouseFormPage';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter >
      <Switch>
            <Route id="homepage" path='/' exact component={Homepage}/>
            <Route id="about_us" path='/o-nas' exact component={AboutUsPage}/>
            <Route id="offer" path='/oferta' exact component={OfferPage}/>
            <Route id="details" path='/dom' exact component={HouseDetails}/>
            <Route id="add_house" path='/dodaj-dom' exact component={AddHouseFormPage}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
