/* global describe, it */

const someSums = require('../problems/somesums');
const expect = require('chai').expect;

describe('Some Sums', () => {
  it('should return earliest subarray of length num whoes entries add up to sum', () => {
    const tests = [
      {
        inputs: [[1, 2, 3], 6, 3],
        output: [1, 2, 3],
      },
      {
        inputs: [[1, 2, 1, 1, 5, 3, 7, 5, 9, 6], 4, 2],
        output: [1, 3],
      },
      {
        inputs: [[-1, -6, -2, -10, 4, 5, 1, -2], -10, 3],
        output: [-1, -10, 1],
      },
      {
        inputs: [[1, 4, 1, 1, 1, 1, 2, 3], 5, 2],
        output: [1, 4],
      },
      {
        inputs: [[1, 3, 6, 9, 16, 1, 18], 18, 3],
        output: [1, 16, 1],
      },
      {
        inputs: [[1, 2, 3, 1, 5, 8, 13, 21, 34, 1, 1, 2, 3, 5, 8, 13, 21], 32, 6],
        output: [1, 2, 3, 5, 8, 13],
      },
      {
        inputs: [[1], 1, 1],
        output: [1],
      },
    ];

    tests.forEach(({ inputs, output }) => {
      expect(someSums(...inputs)).to.eql(output);
    });
  });

  it('should return false if no such subarray exists', () => {
    const tests = [
      {
        inputs: [[1, 6, 7, 8], 12, 4],
        output: false,
      },
      {
        inputs: [[12, 12, 12, 12, 12], 12, 2],
        output: false,
      },
    ];

    tests.forEach(({ inputs, output }) => {
      expect(someSums(...inputs)).to.eql(output);
    });
  });
});
