import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.105:3333' // Ip que é disponibilizado pelo Expo em: http://localhost:19002/ e a porta 3333 do node (backend)
});

export default api;