const calculateStylePoints = styleNotes => {
  if (!Array.isArray(styleNotes)) {
    return 'error: not an array';
  }
  if (styleNotes.length !== 5) {
    return 'error: wrong amount of elements';
  }
  const valueCheck = styleNotes.find(el => {
    return (el % 1 !== 0.5 && el % 1 !== 0) || el > 20 || el < 0;
  });

  if (valueCheck) {
    if (valueCheck > 20) {
      return 'error: value over 20';
    }
    if (valueCheck < 0) {
      return 'error: value under 0';
    }
    if (valueCheck % 1 !== 0.5 && valueCheck % 1 !== 0) {
      return 'error: value not valid';
    }
  }

  if (styleNotes.length === 5 && !valueCheck) {
    return styleNotes
      .sort()
      .slice(1, -1)
      .reduce((a, b) => {
        return a + b;
      });
  }
  return 'error wrong input';
};
module.exports = calculateStylePoints;
