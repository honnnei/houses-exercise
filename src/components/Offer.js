import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";

export default function Offer() {

    const [houseData, setHouseData] = useState([]);

    const getHouseData = () => {
        Axios.get('http://mr-test-backend.sadek.usermd.net/houses')
            .then((response) => {
            //   window.location.reload(false);
            console.log(response.data);
            setHouseData(response.data.houses)
            }).catch((error) => {
              console.log(error);
            });
    }

    const deleteHouse = (houseId) => {
        if (window.confirm("Are you sure you would like to delete this?")) {
            Axios.delete(`http://mr-test-backend.sadek.usermd.net/houses/${houseId}`)
            .then((response) => {
            //   window.location.reload(false);
            console.log(response);
            getHouseData();
            }).catch((error) => {
              console.log(error);
            });
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
                    <h3>{house._id}</h3>
                    <button className="subtitle"><Link to={{ pathname:"/dom", state: { houseData: house }}}>Szczegóły</Link></button>
                    <button className="subtitle" onClick={() => deleteHouse(house._id)}>Usuń</button>
                </div>
            )) : ""}

        </div>
    )
}
