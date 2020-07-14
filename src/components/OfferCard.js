import React from 'react';
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
const Title = styled.h1`
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    color: black;
`;
const Subtitle = styled.h2`
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    color: rgb(34, 147, 253);
`;
const Paragraph = styled.p`
    padding: 2em;
    text-align: justify;
`;

export default function OfferCard() {
    return (
        <div className="card offer-card">
            <Title>Nasza Oferta</Title>
            <Subtitle>Dowiedz Się, Co Możemy Tobie Zaoferować</Subtitle>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
            <Button><Link to='/oferta'>Zobacz Ofertę</Link></Button>
        </div>
    )
}
