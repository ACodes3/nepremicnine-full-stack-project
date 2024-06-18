// Function to format date to 'day month year' format
export function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate(); // Get the day of the month (1-31)
    const month = date.toLocaleString('default', { month: 'long' }); // Get the full month name
    const year = date.getFullYear(); // Get the full year
    return `${day} ${month} ${year}`;
  }