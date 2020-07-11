import Axios from 'axios';
const url = "http://mr-test-backend.sadek.usermd.net/houses";

export const postHouse = async (houseAddress, houseOwner, housePrice, houseArea) => {
    let res = await Axios.post(url, {
        address: houseAddress,
        owner: houseOwner,
        price: housePrice,
        area: houseArea
    });
    return res;
}

export const getHouses = async () => {
    let res = await Axios.get(url);
    return res.data;   
}

export const deleteHouse = (houseId) => {
    return Axios.delete(`${url}/${houseId}`);
}