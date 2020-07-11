import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import { deleteHouse } from '../api';

export default function HouseDetails(props) {
    const [house, setHouse ] = useState(props.location.state.houseData)
    
    let history = useHistory();

    const deleteHouseCall = async (houseId) => {
        if (window.confirm("Are you sure you would like to delete this?")) {
            await deleteHouse(houseId);
            history.push('/oferta');
          } 
    }

    return (
        <div>
            <h3>Adres</h3>
            <h4>{house.address}</h4>
            <h3>Właściciel</h3>
            <h4>{house.owner}</h4>
            <h3>Cena</h3>
            <h4>{house.price}</h4>
            <h3>Powierzchnia</h3>
            <h4>{house.area}</h4>
            <button onClick={() => deleteHouseCall(house._id)}>Usuń</button>
        </div>
    )
}
