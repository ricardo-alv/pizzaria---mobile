import axios from "axios";

const api = axios.create({
    //baseURL: 'http://localhost:3333',
    baseURL: 'http://192.168.1.9:3333' // ip da maquina local
});

export { api };