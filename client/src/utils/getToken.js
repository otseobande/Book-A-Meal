import ls from './securels';

const getToken = () => {
  const { token } = ls.get('book-a-meal');
  return token;
};

export default getToken;
