import Axios from 'axios';

export const postHouse = async (houseAddress, houseOwner, housePrice, houseArea) => {
    let res = await Axios.post('http://mr-test-backend.sadek.usermd.net/houses', {
        address: houseAddress,
        owner: houseOwner,
        price: housePrice,
        area: houseArea
    });
}

export const getHouses = async () => {
    let res = await Axios.get('http://mr-test-backend.sadek.usermd.net/houses');
    return res.data;   
}

export const deleteHouse = (houseId) => {
    // if (window.confirm("Are you sure you would like to delete this?")) {
        return Axios.delete(`http://mr-test-backend.sadek.usermd.net/houses/${houseId}`);
    // } 
}

    // const deleteHouse = () => {
    //     if (window.confirm("Are you sure you would like to delete this?")) {
    //         Axios.delete(`http://mr-test-backend.sadek.usermd.net/houses/${house._id}`)
    //         .then((response) => {
    //         history.push('/oferta')
    //         }).catch((error) => {
    //           console.log(error);
    //         });
    //       } 
    // }