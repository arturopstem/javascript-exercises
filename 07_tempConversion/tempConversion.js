const convertToCelsius = function (temp) {
  const tempInC = ((temp - 32) * 5) / 9;
  return Number(tempInC.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  const tempInF = (temp * 9) / 5 + 32;
  return Number(tempInF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
