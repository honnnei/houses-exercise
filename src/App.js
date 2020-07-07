import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import Homepage from './containers/Homepage';
import AboutUs from './components/AboutUs';
import Offer from './components/Offer';
import HouseDetails from './components/HouseDetails';
import AddHouseForm from './components/AddHouseForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter >
      <Switch>
            <Route id="homepage" path='/' exact component={Homepage}/>
            <Route id="about_us" path='/o-nas' exact component={AboutUs}/>
            <Route id="offer" path='/oferta' exact component={Offer}/>
            <Route id="details" path='/dom' exact render={(props) => <HouseDetails {...props}/>}/>
            <Route id="add_house" path='/dodaj-dom' exact component={AddHouseForm}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
