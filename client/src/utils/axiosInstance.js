import axios from 'axios';
import ls from './securels';

const { token } = ls.get('book-a-meal');

export default axios.create({
  baseURL: `${process.env.APP_URL}/api/v1/`,
  headers: {
    Authorization: `Bearer ${token}`,
    accept: 'application/json',
    'Content-type': 'application/json; charset=UTF-8'
  }
});
