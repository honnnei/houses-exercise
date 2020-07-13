import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import Homepage from './Homepage';
import AboutUsPage from './AboutUsPage';
import OfferPage from './OfferPage';
import HouseDetails from '../components/HouseDetails';
import AddHouseFormPage from './AddHouseFormPage';
import Router from './Router';

function App() {
  return (
    <div className="app-container">
      <Router />
    </div>
  );
}

export default App;
