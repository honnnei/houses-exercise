import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    width: 50%;
    height: 50%;
    margin: 0;
    flex: 1 0 calc(25% - 10px);
`;

const Gallery = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
    grid-area: topright;
`;
  

export default function GalleryCard() {
    return (
        <Gallery>
                <Image src="https://images.unsplash.com/photo-1514837832696-8acda71f215b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="house" />
                <Image src="https://images.unsplash.com/photo-1523216847009-1dbdf2ca6236?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=839&q=80" alt="house" />
                <Image src="https://images.unsplash.com/photo-1584299574144-b5f8ac209707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="house" />
                <Image src="https://images.unsplash.com/photo-1570905705971-e6f513246752?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=833&q=80" alt="house" />        
        </Gallery>
    );
}
