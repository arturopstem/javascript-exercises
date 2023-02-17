const repeatString = function (str, num) {
  if (num >= 0) {
    let msg = "";
    for (let i = 0; i < num; i++) {
      msg += str;
    }
    return msg;
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
