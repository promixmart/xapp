import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instanceAxios = axios.create({
  baseURL: 'http://10.0.2.2:8000/api/',
  //baseURL: 'http://192.168.0.156:1996/api/',
  //baseURL: 'localhost:8080/api/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    SERVER_KEY: process.env.SERVER_KEY, //move to server, put url pointing to it andvalidate only my app endpoint to be accepted
  },
});

instanceAxios.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

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
