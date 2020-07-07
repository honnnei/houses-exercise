import React, { useState } from 'react';
import Axios from 'axios';

export default function HouseDetails(props) {

    const [house, setHouse ] = useState(props.location.state.houseData)

    const deleteHouse = () => {
        if (window.confirm("Are you sure you would like to delete this?")) {
            Axios.delete(`http://mr-test-backend.sadek.usermd.net/houses/${house._id}`)
            .then((response) => {
            //   window.location.reload(false);
            console.log(response);
            // setHouseData(response.data.houses)
            }).catch((error) => {
              console.log(error);
            });
          } else {
            console.log('no delete')
          }
       
    }
    return (
        <div>
            <h3>Adres</h3>
            <h4>{house.address}</h4>
            <h3>Właściciel</h3>
            <h4>{house.owner}</h4>
            <h3>Cena</h3>
            <h4>{house.price}</h4>
            <h3>Powierzchnia</h3>
            <h4>{house.area}</h4>
            <button onClick={deleteHouse}>Usuń</button>
        </div>
    )
}
