const calculator = (number1, number2) => ({
    sum: number1 + number2,
    mult: number1 * number2,
    div: Math.floor(number1 / number2),
    sub: number1 - number2,  
});

const arrayGenerator = (type, object) => {  
  const calls = {
    keys: Object.keys(object), 
    values: Object.values(object),
    entries: Object.entries(object),
  };
  return calls[type];
};

module.exports = { calculator, arrayGenerator };
