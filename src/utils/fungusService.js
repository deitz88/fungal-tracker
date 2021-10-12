import tokenService from "./tokenService";

const BASE_URL = '/api/fungus/';

async function addFungus(data) {
    console.log(data.created)
    return fetch(BASE_URL + 'addfungus', {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + tokenService.getToken(),
        },
        body: JSON.stringify(data),
    }).then((res) => {
        if (res.ok) return res.json();
        new Error("Error adding fungus");
    });
}

async function getAllFungus() {
    return fetch(BASE_URL + 'getuserindex', {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + tokenService.getToken(),
        },
        // body: JSON.stringify(),
    }).then((res) => {
        if (res.ok) return res.json();
        new Error("Error retrieving fungus");
    });
}

async function deleteFungus(id) {
    return fetch(BASE_URL + 'delete/' + id, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + tokenService.getToken(),
        },
    }).then((res) => {
        if (res.ok) return res.json();
        new Error("Error removing fungus");
    });
}




export default {
    addFungus,
    getAllFungus,
    deleteFungus
};