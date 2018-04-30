import DummyModel from './DummyModel';

const MenuCategories = new DummyModel([
  {
    id: 1,
    menuId: 2,
    title: 'Dessert'
  },
  {
    id: 2,
    menuId: 1,
    title: 'Appetizer'
  },
  {
    id: 3,
    menuId: 3,
    title: 'Tatalots'
  }
]);

export default MenuCategories;
