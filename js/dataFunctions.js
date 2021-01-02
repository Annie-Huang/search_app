export const getSearchTerm = () => {
  const rawSearchTerm = document.getElementById('search').value.trim();
  const regex = /[ ]{2,}/gi; // find anything that has two or more spaces
  const searchTerm = rawSearchTerm.replaceAll(regex, ' ');
  return searchTerm;
}
