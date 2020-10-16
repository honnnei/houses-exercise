import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import { deleteHouse } from '../api';
import { Link } from "react-router-dom";
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

const House = styled.div`

`;

export default function HouseDetails(props) {
    const [house, setHouse ] = useState(props.location.state.houseData)
    const { address, owner, price, area } = house;
    
    let history = useHistory();

    const deleteHouseCall = async (houseId) => {
        if (window.confirm("Are you sure you would like to delete this?")) {
            await deleteHouse(houseId);
            history.push('/oferta');
          } 
    }

    return (
        <House>
            <Button><Link to='/oferta'>Wróc do Oferty</Link></Button>
            <Title>Adres</Title>
            <Subtitle>{address}</Subtitle>
            <Title>Właściciel</Title>
            <Subtitle>{owner}</Subtitle>
            <Title>Cena</Title>
            <Subtitle>{price}</Subtitle>
            <Title>Powierzchnia</Title>
            <Subtitle>{area}</Subtitle>
            <Button onClick={() => deleteHouseCall(house._id)}>Usuń</Button>
        </House>
    )
}
