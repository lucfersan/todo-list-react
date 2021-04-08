import axios from 'axios';

const api = axios.create({
  baseURL: 'https://listlucas.herokuapp.com',
});

export default api;
