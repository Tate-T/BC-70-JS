"use strict";

// Create a function that takes a string and returns an array of the letters that occur only once.

const str = "Ballon";

function findLetters(str) {
  let n = 0;
  let res = str.split("");
  for (i1 = 0; i1 < res.length; i1++) {
    for (i2 = i1 + 1; i2 < res.length; i2++) {
      if (res[i1] === res[i2]) {
        delete res[i2];
        n++;
      }
    }

    if (n > 0) {
      delete res[i1];
      n = 0;
    }
  }
  res = res.join("");
  res = res.split("");
  return res;
}

function findLetters(str) {
  return [...str].filter((x) => str.indexOf(x) === str.lastIndexOf(x));
}
