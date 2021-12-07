import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instanceAxios = axios.create({
  baseURL: 'http://10.0.2.2:3306/api/',
  //baseURL: 'http://192.168.0.156:1996/api/',
  //baseURL: 'localhost:8080/api/',
  timeout: 1000,
        method: 'POST',
  headers: {
    'Content-Type': 'application/json, text/plain, */*',
    Accept: 'application/json',
    SERVER_KEY: '440be51423ef127d6263bfd213ecabd5', //move to server, put url pointing to it andvalidate only my app endpoint to be accepted
  },
});

instanceAxios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const code = error && error.response ? error.response.status : 0;
    if (code === 401 || code === 403) {
      console.log('error code', code);
    }
    return Promise.reject(error);
  },
);

export default instanceAxios;
