export const setSearchFocus = () => {
  document.getElementById('search').focus();
}

export const showClearTextButton = () => {
  const search = document.getElementById('search'); // the input field
  const clear = document.getElementById('clear'); // cross button
  if (search.value.length) {
    clear.classList.remove('none');
    clear.classList.add('flex');
  } else {
    clear.classList.add('none');
    clear.classList.remove('flex');
  }
}
