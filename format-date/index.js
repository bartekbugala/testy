const formatDate = timeInSeconds => {
  let hours = parseInt(timeInSeconds / 3600);
  let minutes = parseInt(timeInSeconds / 60) - hours * 60;
  let seconds = timeInSeconds - hours * 3600 - minutes * 60;

  let addTimePos = (value, suffix) => {
    if (value > 0) {
      return value + suffix;
    }
    return '';
  };

  let formattedTime = `${addTimePos(hours, 'h')}${addTimePos(minutes, 'm')}${seconds}s`;
  return `${formattedTime}`;
};

module.exports = formatDate;
