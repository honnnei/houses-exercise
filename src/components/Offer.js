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

    useEffect(() => {
        getHouseData();
      }, []);

    return (
        <div>
            <Link to='/dodaj-dom'>Dodaj Dom</Link>
            {houseData ? houseData.map((house, id) => (
                <div>
                    <h3>{house.address}</h3>
                    <h3>{house.price}</h3>
                    <h3>{house._id}</h3>
                    <Link to={{ pathname:"/dom", state: { houseData: house }}}>Szczegóły</Link>
                </div>
            )) : ""}

        </div>
    )
}
