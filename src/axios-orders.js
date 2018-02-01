import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-7aefd.firebaseio.com/'
});

export default instance;
