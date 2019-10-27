function sum(a, b) {
  if (!isFinite(a) || !isFinite(b)) {
    return null;
  }
  return Number(a) + Number(b);
}

const received = sum(1, 2);
const expected = 3;

function assert(received, expected) {
  if (received === expected) {
    console.log('Test passed!');
  } else {
    console.log(`Test failed. Expecting ${expected} but received ${received}`);
  }
}

assert(received, expected);

assert(sum('1', '2'), 3);
assert(sum('-4', '2'), -2);
assert(sum('0', 6), 6);
assert(sum('10', 'ania'), null); // NaN
assert(sum(10, 'ania'), null); // null
assert(sum('ala', '12'), null); // null
assert(sum('kod', 'illa'), null); // null
assert(sum(0.1, 0.2), 0.3); // null
assert(sum('0.1', '0.2'), 0.3); // null
