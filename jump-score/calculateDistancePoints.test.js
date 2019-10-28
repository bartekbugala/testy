const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
  describe('input values', () => {
    it('Should return error if any value is undefined', () => {
      const actual = calculateDistancePoints(undefined, 'mammoth', 200);

      const expected = 'error: wrong or undefined value passed';

      assert.equal(actual, expected);
    });
    it('Should return error if wrong value is passed as jump score name', () => {
      const actual = calculateDistancePoints(223, 'huge', 200);

      const expected = 'error: wrong value passed to hillSize';

      assert.equal(actual, expected);
    });
  });
  describe('distancePoints', () => {
    it('should return correct amount points for normal hill ', () => {
      const actual = calculateDistancePoints(106.5, 'normal', 98);

      const expected = 77.0;

      assert.equal(actual, expected);
    });
    it('should return correct amount points for big hill ', () => {
      const actual = calculateDistancePoints(133, 'big', 120);

      const expected = 83.4;

      assert.equal(actual, expected);
    });
    it('should return correct amount points for mammoth hill ', () => {
      const actual = calculateDistancePoints(223, 'mammoth', 200);

      const expected = 147.6;

      assert.equal(actual, expected);
    });
  });
});
