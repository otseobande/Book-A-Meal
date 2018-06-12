const mealsForTheDay = [
  'REQUEST_MEALS_FOR_THE_DAY',
  'RECIEVE_MEALS_FOR_THE_DAY'
];


export default [
  ...mealsForTheDay
].reduce((acc, type) => ({ ...acc, [type]: type }), {});
