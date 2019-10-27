function sum(a, b) {
  if (!isFinite(a) || !isFinite(b)) {
    return null;
  }
  return Number(a) + Number(b);
}

console.log(sum('1', '2'));
console.log(sum('-4', '2'));
console.log(sum('0', 6));
console.log(sum('10', 'ania')); // NaN
console.log(sum(10, 'ania')); // null
console.log(sum('ala', '12')); // null
console.log(sum('kod', 'illa')); // null
console.log(sum(0.1, 0.2)); // null
console.log(sum('0.1', '0.2')); // null
