const types = [
  'REQUEST_MENUS_FOR_THE_DAY',
  'SAVE_MENUS_FOR_THE_DAY'
];

export default types.reduce((acc, type) => ({ ...acc, [type]: type }), {});
