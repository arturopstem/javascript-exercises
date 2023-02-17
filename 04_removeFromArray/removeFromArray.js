const removeFromArray = function () {
  const args = Array.from(arguments);
  const arr = args.shift();
  args.forEach((arg) => {
    if (arr.includes(arg)) {
      let argIndex = arr.indexOf(arg);
      arr.splice(argIndex, 1);
    }
  });
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
