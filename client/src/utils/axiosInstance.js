import axios from 'axios';
import getToken from './getToken';

export default () => axios.create({
  baseURL: `${process.env.APP_URL}/api/v1/`,
  headers: {
    Authorization: `Bearer ${getToken()}`,
    accept: 'application/json',
    'Content-type': 'application/json; charset=UTF-8'
  }
});
