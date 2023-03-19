import axios from 'axios';

const token = window.localStorage.getItem('token');

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

if (token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}