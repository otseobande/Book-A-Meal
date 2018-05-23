import bcrypt from 'bcrypt';

export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users', [
    {
      id: 'e20ac257-86cc-4a6f-a619-0249a201c475',
      fullName: 'Otse Obande',
      email: 'otseobande@gmail.com',
      username: 'otseobande',
      password: bcrypt.hashSync('bookameal', 10),
      role: 'admin'
    },
    {
      id: 'ba8e1fd3-926f-44c9-a7b3-218aedab8c12',
      fullName: 'John Ade',
      email: 'mealbooker@gmail.com',
      username: 'john',
      password: bcrypt.hashSync('bookameal', 10),
      role: 'customer'
    },
    {
      id: 'fa56c9e7-e5f4-4086-b7e9-db581201b71f',
      fullName: 'Zappa Balami',
      username: 'zappa',
      email: 'zappabalami@gmail.com',
      password: bcrypt.hashSync('bookameal', 10),
      role: 'caterer'
    }
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {})
};
