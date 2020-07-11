import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";
import { getHouses, deleteHouse } from '../api';

export default function Offer() {
    const [houseData, setHouseData] = useState([]);

    const getHouseData = async () => {
        let data = await getHouses();
        setHouseData(data.houses);
        console.log(data.houses);
    }

    const deleteHouseNow = async (houseId) => {
        if (window.confirm("Are you sure you would like to delete this?")) {
            await deleteHouse(houseId);
            getHouseData();
          } 
    }

    useEffect(() => {
        getHouseData();
    }, []);

    return (
        <div>
            <button className="subtitle"><Link to='/'>Strona Główna</Link></button>
            <button className="subtitle"><Link to='/dodaj-dom'>Dodaj Dom</Link></button>
            {houseData ? houseData.map((house, id) => (
                <div>
                    <h3>{house.address}</h3>
                    <h3>{house.price}</h3>
                    <button className="subtitle"><Link to={{ pathname:"/dom", state: { houseData: house }}}>Szczegóły</Link></button>
                    <button className="subtitle" onClick={() => deleteHouseNow(house._id)}>Usuń</button>
                </div>
            )) : ""}
        </div>
    );
}
