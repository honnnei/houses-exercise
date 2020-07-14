import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    color: black;
`;
const Subtitle2 = styled.h2`
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
`;
const Paragraph = styled.p`
    padding: 2em;
    text-align: justify;
`;

export default function ArticlesCard() {
    return (
        <div className="card articles-card">
           <Subtitle2>Budowa</Subtitle2>
           <Subtitle2>Wykończenie</Subtitle2>
           <Subtitle2>Ogrody</Subtitle2>
           <Subtitle2>Architektura</Subtitle2>
           <Subtitle2>Remonty</Subtitle2>
        </div>
    );
}
