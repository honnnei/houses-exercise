import React from 'react';
import styled from 'styled-components';

const Subtitle2 = styled.h2`
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    text-transform: uppercase;
    color: rgb(34, 147, 253);
`;

const Articles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
    grid-area: bottomleft;
    background-image: url(https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80);
`;

export default function ArticlesCard() {
    return (
        <Articles>
           <Subtitle2>Budowa</Subtitle2>
           <Subtitle2>Wykończenie</Subtitle2>
           <Subtitle2>Ogrody</Subtitle2>
           <Subtitle2>Architektura</Subtitle2>
           <Subtitle2>Remonty</Subtitle2>
        </Articles>
    );
}
