const deepFlatten = (arr) => {
  if (!Array.isArray(arr)) {
    const msg = `function expects array got ${typeof (arr)} instead`;
    throw new TypeError(msg);
  }

  let flatArr = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flatArr = flatArr.concat(deepFlatten(item));
    } else {
      flatArr.push(item);
    }
  });

  return flatArr;
};

export default deepFlatten;
