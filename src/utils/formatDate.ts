const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * @param {Date | string} date date in ISO 8601 format
 * @returns {string} formatted date
 * @example 'January 1, 2023'
 */
export const formatDate = (date: Date | string): string => {
  const currentDate = new Date(date);
  const day = currentDate.getDate(); // Gets the day of the month (1-31)
  const month = months[currentDate.getMonth()]; // Gets the month (0-11, where 0 is January)
  const year = currentDate.getFullYear(); // Gets the year (e.g., 2023)
  return `${month} ${day}, ${year}`;
};
