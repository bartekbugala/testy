const calculateDistancePoints = (distance, hillSize, kPoint) => {
  if (!distance || !hillSize || !kPoint) {
    return 'error: wrong or undefined value passed';
  }
  kPointBase = getKPointBase(hillSize);
  distance = roundToHalf(distance);

  let pointsTotal = kPointBase;
  let pointFactor = getFactor(hillSize);
  if (kPointBase === null || pointFactor === null) {
    return 'error: wrong value passed to hillSize';
  }
  if (distance > kPoint) {
    let difference = distance - kPoint;
    pointsTotal += difference * pointFactor;
    return pointsTotal;
  }
  let difference = kPoint - distance;
  pointsTotal -= difference * pointFactor;
  return pointsTotal;
};

function roundToHalf(num) {
  return Math.round(num * 2) / 2;
}

function getKPointBase(hillSize) {
  try {
    switch (hillSize) {
      case 'normal':
        return 60;
      case 'big':
        return 60;
      case 'mammoth':
        return 120;
      default:
        throw 'wrong hill size name';
    }
  } catch (e) {
    return null;
  }
}

function getFactor(hillSize) {
  try {
    switch (hillSize) {
      case 'normal':
        return 2;
      case 'big':
        return 1.8;
      case 'mammoth':
        return 1.2;
      default:
        throw 'wrong hill size name';
    }
  } catch (e) {
    return null;
  }
}

module.exports = calculateDistancePoints;
