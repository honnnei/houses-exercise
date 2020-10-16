import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { getHouses, deleteHouse } from '../api';
import styled from 'styled-components';

const Button = styled.button`
    border: solid rgb(34, 147, 253) 1px;
    background-color: white;
    background-size: inherit;
    padding: 0.5em;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    color: rgb(34, 147, 253);
`;

const Subtitle = styled.h2`
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    color: rgb(34, 147, 253);
`;
const Title = styled.h1`
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    color: black;
`;

const Offer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
    grid-area: bottomright;
`;

export default function OfferPage() {
    const [houseData, setHouseData] = useState([]);

    const getHouseCall = async () => {
        let data = await getHouses();
        setHouseData(data.houses);
        console.log(data.houses);
    }

    const deleteHouseCall = async (houseId) => {
        if (window.confirm("Are you sure you would like to delete this?")) {
            await deleteHouse(houseId);
            getHouseCall();
          } 
    }

    useEffect(() => {
        getHouseCall();
    }, []);

    return (
        <Offer>
            <Button><Link to='/'>Strona Główna</Link></Button>
            <Button><Link to='/dodaj-dom'>Dodaj Dom</Link></Button>
            {houseData ? houseData.map((house, id) => (
                <div key={id}>
                    <Subtitle>{house.address}</Subtitle>
                    <Title>{house.price}</Title>
                    <Button><Link to={{ pathname:"/dom", state: { houseData: house }}}>Szczegóły</Link></Button>
                    <Button onClick={() => deleteHouseCall(house._id)}>Usuń</Button>
                </div>
            )) : ""}
        </Offer>
    );
}
