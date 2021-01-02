import {setSearchFocus, showClearTextButton, clearSearchText, clearPushListener} from './searchBar.js';
import {getSearchTerm, retrieveSearchResults} from './dataFunctions.js';
import {deleteSearchResults, buildSearchResults, clearStatsLine, setStatsLine} from './searchResults.js';

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'complete') {
    initApp();
  }
});

const initApp = () => {
  setSearchFocus();

  // Decide to show the cross button or not depending on whether use has enter something in the input.
  const search = document.getElementById('search'); // the input field
  search.addEventListener('input', showClearTextButton);

  const clear = document.getElementById('clear');
  // Clear the input field when the clear button is clicked.
  clear.addEventListener('click', clearSearchText);
  // Clear the input when you use the keyboard to tab into the cross and click enter or space.
  clear.addEventListener('keydown', clearPushListener);

  const form = document.getElementById('searchBar');
  form.addEventListener('submit', submitTheSearch);
}

// Procedural 'workflow' function
const submitTheSearch = (event) => {
  event.preventDefault();
  deleteSearchResults();
  processTheSearch();
  setSearchFocus();
}

const processTheSearch = async () => {
  clearStatsLine();
  const searchTerm = getSearchTerm();
  if (searchTerm === '') return;

  const resultArray = await retrieveSearchResults(searchTerm);
  if(resultArray.length) buildSearchResults(resultArray);
  setStatsLine(resultArray.length);
}
