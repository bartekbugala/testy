const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
  describe('stylePoints', () => {
    it('Should return an error for no value', () => {
      const actual = calculateStylePoints();

      const expected = 'error: not an array';

      assert.equal(actual, expected);
    });
    it('Should return an error for wrong input type', () => {
      const actual = calculateStylePoints('cat');

      const expected = 'error: not an array';

      assert.equal(actual, expected);
    });
    it('Should return an error for invalid floating point numbers (12.3, 17.4)', () => {
      const actual = calculateStylePoints([16.1, 15.2, 16.5, 16, 18.05]);

      const expected = 'error: value not valid';

      assert.equal(actual, expected);
    });
    it('Should return error if any value is over 20', () => {
      const actual = calculateStylePoints([13, 5.5, 22.0, 18.0, 6]);

      const expected = 'error: value over 20';

      assert.equal(actual, expected);
    });
    it('Should return error if any value is under 0', () => {
      const actual = calculateStylePoints([-13, 5.5, 15.0, -18.0, 2]);

      const expected = 'error: value under 0';

      assert.equal(actual, expected);
    });
    it('Should return an error for too many elements in array', () => {
      const actual = calculateStylePoints([19, 18.5, 18.5, 20, 2, 16, 18.5, 18.0]);

      const expected = 'error: wrong amount of elements';

      assert.equal(actual, expected);
    });
    it('Should return correct value if all numbers in array are valid', () => {
      const actual = calculateStylePoints([16, 17, 16.5, 16, 18]);

      const expected = 49.5;

      assert.equal(actual, expected);
    });
    it('Should return correct values for repeating values', () => {
      const actual = calculateStylePoints([18, 18.5, 17.5, 18.5, 18.5]);

      const expected = 55.0;

      assert.equal(actual, expected);
    });
    it('Should return error for not enough amount notes', () => {
      const actual = calculateStylePoints([16, 18.5, 17]);

      const expected = 'error: wrong amount of elements';

      assert.equal(actual, expected);
    });
  });
});
