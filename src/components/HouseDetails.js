import React from 'react';

export default function HouseDetails(props) {

    const deleteHouse = () => {
        
    }
    return (
        <div>
            <h3>Adres</h3>
            <h4>{props.location.state.houseData.address}</h4>
            <h3>Właściciel</h3>
            <h4>{props.location.state.houseData.owner}</h4>
            <h3>Cena</h3>
            <h4>{props.location.state.houseData.price}</h4>
            <h3>Powierzchnia</h3>
            <h4>{props.location.state.houseData.area}</h4>
            <button onClick={deleteHouse}>Usuń</button>
        </div>
    )
}
