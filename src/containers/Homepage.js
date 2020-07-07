import React from 'react';
import AboutUsCard from '../components/AboutUsCard';
import ArticlesCard from '../components/ArticlesCard';
import GalleryCard from '../components/GalleryCard';
import OfferCard from '../components/OfferCard';

export default function Homepage() {
    return (
        <div className="homepage-container">
            <AboutUsCard />
            <GalleryCard />
            <ArticlesCard />
            <OfferCard />
            
        </div>
    )
}
