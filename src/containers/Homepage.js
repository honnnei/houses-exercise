import React from 'react';
import AboutUsCard from '../components/AboutUsCard';
import ArticlesCard from '../components/ArticlesCard';
import GalleryCard from '../components/GalleryCard';
import OfferCard from '../components/OfferCard';
import styled from 'styled-components';

const HomePageDiv = styled.div`
    width: 100vw;
    height: 100vw;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "topleft topright"
    "bottomleft bottomright";
`;

export default function Homepage() {
    return (
        <HomePageDiv>
            <AboutUsCard />
            <GalleryCard />
            <ArticlesCard />
            <OfferCard />
        </HomePageDiv>
    );
}
