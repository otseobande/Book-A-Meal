import DummyModel from './DummyModel';

const orders = new DummyModel([
  {
    id: 1,
    userId: 2,
    mealId: 2,
    quantity: 1,
    deliveryAddress: 'bajiki close'
  },
  {
    id: 2,
    userId: 2,
    mealId: 1,
    quantity: 1,
    deliveryAddress: 'bajiki close'
  },
  {
    id: 1,
    userId: 2,
    mealId: 3,
    quantity: 1,
    deliveryAddress: 'Irepodun street'
  }
]);

export default orders;
