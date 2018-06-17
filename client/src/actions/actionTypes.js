const mealsForTheDay = [
  'REQUEST_MEALS_FOR_THE_DAY',
  'RECIEVE_MEALS_FOR_THE_DAY'
];

const auth = [
  'UPDATE_AUTHENTICATED_USER'
];

export default [
  ...mealsForTheDay,
  ...auth
].reduce((acc, type) => ({ ...acc, [type]: type }), {});
