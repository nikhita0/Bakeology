import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cake-111c0.firebaseio.com/'
});

export default instance;