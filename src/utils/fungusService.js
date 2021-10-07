import tokenService from "./tokenService";

const BASE_URL = '/api/fungus/';

async function addFungus(data){
    // console.log(data)
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


export default {
    addFungus
  };