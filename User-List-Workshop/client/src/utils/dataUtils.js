export const formatDate = function formatISODate(isoDateString) {
  const isoDate = new Date(isoDateString);

  // Extracting components from the date
  const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(isoDate);
  const day = isoDate.getDate();
  const year = isoDate.getFullYear();

  // Format the date
  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;

}

export const dateFormat = function formatDateFromIso(isoDate) {
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  return new Date(isoDate).toLocaleDateString(undefined, options)
}