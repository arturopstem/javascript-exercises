const palindromes = function (str) {
  const strArray = str.match(/\w/g);
  const cleanStr = strArray.join("").toLowerCase();
  const reverseStr = strArray.reverse().join("").toLowerCase();
  return cleanStr === reverseStr ? true : false;
  
  //   const strArray = str.match(/\w/g);
  //   const index = Math.floor(strArray.length / 2);

  //   const leftArray = strArray.slice(0, index);
  //   strArray.reverse();
  //   const rightArray = strArray.slice(0, index);

  //   const leftStr = leftArray.join("").toLowerCase();
  //   const rightStr = rightArray.join("").toLowerCase();

  //   return leftStr === rightStr ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
