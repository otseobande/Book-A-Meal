import DummyModel from './DummyModel';

const users = new DummyModel([
  {
    id: 1,
    fullName: 'Otse Obande',
    email: 'otseobande@gmail.com',
    username: 'otseobande',
    password: 'bookameal',
    role: 'caterer'
  },
  {
    id: 2,
    fullName: 'John Ade',
    email: 'john@gmail.com',
    username: 'john',
    password: 'bookameal',
    role: 'customer'
  },
  {
    id: 3,
    fullName: 'Zappa Balami',
    username: 'zappa',
    email: 'zappabalami@gmail.com',
    password: 'bookameal',
    role: 'caterer'
  }
]);

export default users;
