/*
  Given an array of numbers and a desired sum,
  return the earliest-starting subarray of length num whose entries
  add up to sum from the input array. Return false if no such subarray exists
*/

function someSums(array, sum, num, sub = [], i = 0) {
  if (num === 0) {
    return sub.reduce((acc, next) => acc + next) === sum ? sub : false;
  }

  if (!array[i]) {
    return false;
  }

  return someSums(array, sum, num - 1, [...sub, array[i]], i + 1)
    || someSums(array, sum, num, sub, i + 1);
}

module.exports = someSums;
