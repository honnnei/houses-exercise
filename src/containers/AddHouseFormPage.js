import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postHouse } from '../api';

export default function AddHouseForm() {
    const [houseAddress, setHouseAddress] = useState("");
    const [houseOwner, setHouseOwner] = useState("");
    const [housePrice, setHousePrice] = useState("");
    const [houseArea, setHouseArea] = useState(0);

    const { register, handleSubmit, watch, errors } = useForm();
  
    console.log(watch("houseAddress", "houseOwner", "housePrice", "houseArea"));

    let history = useHistory();

    const postHouseCall = async (data, event) => {
        event.preventDefault();
        await postHouse(data.houseAddress, data.houseOwner, data.housePrice, data.houseArea);
        history.push('/oferta');
    }

    return (
        <div className="addhouseform-container">
            <button className="subtitle"><Link to='/oferta'>Wróć</Link></button>
            <form onSubmit={handleSubmit(postHouseCall)}>
                <label>Adres</label>
                <input
                type="text"
                ref={register ({ required: true})}
                name="houseAddress"
                />
                 {errors.houseAddress && <span>House Address is required</span>}
                <label>Właściciel</label>
                <input
                type="text"
                ref={register ({ required: true})}
                name="houseOwner"
                />
                 {errors.houseOwner && <span>House Owner is required</span>}
                <label>Cena</label>
                <input
                type="text"
                ref={register ({ required: true})}
                name="housePrice"
                />
                {errors.housePrice && <span>House Price is required</span>}
                <label>Powierzchnia</label>
                <input
                type="number"
                ref={register ({ required: true})}
                name="houseArea"
                />
                {errors.houseArea && <span>House Area is required</span>}
                <button className="subtitle" >Dodaj Dom</button>
            </form>
        </div>
    );
}
