const axios = require('axios');

async function getdata() {
    let response = await axios.get("https://mindicador.cl/api");

    console.log(response.data.dolar.fecha);
}

getdata();