import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'; //add base url here

const apiInstance = axios.create();

apiInstance.interceptors.request.use(
  async request => {
    let token = await AsyncStorage.getItem('token');
    let deviceId = await AsyncStorage.getItem('deviceID');
    if (token != undefined) {
      request.headers = {
        // Authorization: `Bearer ${token}`,
        'Content-Type': request.headers['Content-Type'],
        // deviceuid: deviceId,
      };
    } else {
      request.headers = {
        'Content-Type': request.headers['Content-Type'],
      };
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);

export default apiInstance;
