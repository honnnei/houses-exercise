import React from 'react';
import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <div>
            <Link to='/o-nas'>Zobacz Wiecej</Link>
            <Link to='/oferta'>Zobacz Oferte</Link>
        </div>
    )
}
