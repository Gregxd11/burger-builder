import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-buger-9ab5f.firebaseio.com/'
});

export default instance;
