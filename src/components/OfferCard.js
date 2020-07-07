import React from 'react';
import { Link } from "react-router-dom";

export default function OfferCard() {
    return (
        <div className="card offer-card">
            <h1>Card</h1>
            <Link to='/oferta'>Zobacz Oferte</Link>
        </div>
    )
}
