const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  let elementsSum = 0;
  const amount = array.length;
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'number') {
      return undefined;
    }
    elementsSum += array[index];
  }
  return Math.round(elementsSum / amount);
};

module.exports = average;
