/**
 * Adds scopes to models
 *
 * @param  {object} db - Sequelize db object
 * @return {undefined}
 */
const addScopes = (db) => {
  db.order.addScope('defaultScope', {
    include: [
      { model: db.meal, paranoid: false }
    ],
    order: [
      ['createdAt', 'DESC']
    ],
    attributes: { exclude: ['deletedAt'] }
  }, { override: true });

  db.order.addScope('caterer', catererUserId => ({
    include: [
      { model: db.user, as: 'customer' },
      {
        model: db.meal,
        include: [{
          model: db.user,
          as: 'caterer',
          where: {
            id: catererUserId
          }
        }],
        paranoid: false
      }
    ],
    order: [
      ['createdAt', 'DESC']
    ],
    attributes: { exclude: ['deletedAt'] }
  }), { override: true });

  db.menu.addScope('defaultScope', {
    include: [
      { model: db.user, as: 'caterer' },
      {
        model: db.menuCategory,
        as: 'categories',
        include: [{
          model: db.meal,
          through: {
            attributes: []
          }
        }]
      }
    ],
    order: [
      ['createdAt', 'DESC']
    ]
  }, { override: true });
};

export default addScopes;
