import axios from 'axios';

/*
// Rodar com ipv4: json-server --watch -d 180 --host ( meu ip ) db.json
*/

const api = axios.create({
    baseURL:'http://192.168.15.8:3000'
})

export default api;