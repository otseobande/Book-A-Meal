const mealsForTheDay = [
  'REQUEST_MEALS_FOR_THE_DAY',
  'RECIEVE_MEALS_FOR_THE_DAY'
];

const auth = [
  'LOGIN_SUCCESS',
  'LOGOUT'
];

export default [
  ...mealsForTheDay,
  ...auth
].reduce((acc, type) => ({ ...acc, [type]: type }), {});
