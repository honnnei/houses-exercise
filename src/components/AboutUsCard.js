import React from 'react';
import { Link } from "react-router-dom";

export default function AboutUsCard() {
    return (
        <div className="card about-us-card">
            <h1>Card</h1>
            <Link to='/o-nas'>Zobacz Wiecej</Link>
        </div>
    )
}
