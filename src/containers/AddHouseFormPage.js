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

    const postHouseCall = async (event) => {
        event.preventDefault();
        await postHouse(houseAddress, houseOwner, housePrice, houseArea);
        history.push('/oferta');
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
                <button className="subtitle" onClick={postHouseCall}>Dodaj Dom</button>
            </form>
        </div>
    );
}
