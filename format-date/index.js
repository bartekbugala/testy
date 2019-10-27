const formatDate = timeInSeconds => {
  let hours = parseInt(timeInSeconds / 3600);
  let minutes = parseInt(timeInSeconds / 60) - hours * 60;
  let seconds = timeInSeconds - hours * 3600 - minutes * 60;

  let addTimePosition = (value, suffix) => {
    if (value > 0) {
      return `${value}${suffix} `;
    }
    return suffix === 's' && (hours <= 0 && minutes <= 0) ? `${value}${suffix} ` : '';
  };

  let formattedTime = `${addTimePosition(hours, 'h')}${addTimePosition(minutes, 'm')}${addTimePosition(seconds, 's')}`;
  return `${formattedTime.trim()}`;
};

module.exports = formatDate;
