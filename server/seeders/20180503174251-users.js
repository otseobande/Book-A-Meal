import bcrypt from 'bcrypt';

export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users', [
    {
      fullName: 'Otse Obande',
      email: 'otseobande@gmail.com',
      username: 'otseobande',
      password: bcrypt.hashSync('bookameal', 10),
      role: 'caterer'
    },
    {
      fullName: 'John Ade',
      email: 'john@gmail.com',
      username: 'john',
      password: bcrypt.hashSync('bookameal', 10),
      role: 'customer'
    },
    {
      fullName: 'Zappa Balami',
      username: 'zappa',
      email: 'zappabalami@gmail.com',
      password: bcrypt.hashSync('bookameal', 10),
      role: 'caterer'
    }
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {})
};
