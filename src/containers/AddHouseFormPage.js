import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Axios from 'axios';
import { postHouse } from '../api';

export default function AddHouseForm() {
    const [houseAddress, setHouseAddress] = useState("");
    const [houseOwner, setHouseOwner] = useState("");
    const [housePrice, setHousePrice] = useState("");
    const [houseArea, setHouseArea] = useState(0);

    let history = useHistory();

    // const addHouse = (event) => {
    //     event.preventDefault();
    //     Axios.post('http://mr-test-backend.sadek.usermd.net/houses', {
    //        address: houseAddress,
    //        owner: houseOwner,
    //        price: housePrice,
    //        area: houseArea
    //       })
    //         .then((response) => {
    //         console.log(response);
    //         history.push('/oferta')
    //         }).catch((error) => {
    //           console.log(error);
    //         });

    // }

    const addHouse = (event) => {
        event.preventDefault();
        postHouse(houseAddress, houseOwner, housePrice, houseArea);
    }

    return (
        <div className="addhouseform-container">
            <button className="subtitle"><Link to='/oferta'>Wróć</Link></button>
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
                <button className="subtitle" onClick={addHouse}>Dodaj Dom</button>
            </form>
        </div>
    );
}