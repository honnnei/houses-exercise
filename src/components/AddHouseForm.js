import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Axios from 'axios';

export default function AddHouseForm() {
    const [houseAddress, setHouseAddress] = useState("");
    const [houseOwner, setHouseOwner] = useState("");
    const [housePrice, setHousePrice] = useState("");
    const [houseArea, setHouseArea] = useState(0);

    let history = useHistory();

    const addHouse = (event) => {
        event.preventDefault();
        console.log(houseAddress, houseOwner, housePrice, houseArea);

        Axios.post('http://mr-test-backend.sadek.usermd.net/houses', {
           address: houseAddress,
           owner: houseOwner,
           price: housePrice,
           area: houseArea
          })
            .then((response) => {
            console.log(response);
            history.push('/oferta')
            }).catch((error) => {
              console.log(error);
            });

    }

    return (
        <div className="addhouseform-container">
            <form>
                <label>Adres</label>
                <input
                type="text"
                value={houseAddress}
                onChange={(e) => setHouseAddress(e.target.value)}
                />
                <label>Właściciel</label>
                <input
                type="text"
                value={houseOwner}
                onChange={(e) => setHouseOwner(e.target.value)}
                />
                <label>Cena</label>
                <input
                type="text"
                value={housePrice}
                onChange={(e) => setHousePrice(e.target.value)}
                />
                <label>Powierzchnia</label>
                <input
                type="number"
                value={houseArea}
                onChange={(e) => setHouseArea(e.target.value)}
                />
                <button onClick={addHouse}>Dodaj Dom</button>
            </form>
            
        </div>
    )
}
