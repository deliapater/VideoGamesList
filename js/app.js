
document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const videoGamesListItem= createVideoGamesListItem(event.target);
  const videoGamesList = document.querySelector('#video-games-list');
  videoGamesList.appendChild(videoGamesListItem);

  event.target.reset();
}

const createVideoGamesListItem = function (form) {
  const videoGamesListItem = document.createElement('li');
  videoGamesListItem.classList.add('#video-games-list');

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  videoGamesListItem.appendChild(title);

  const developer = document.createElement('h3');
  developer.textContent = form.developer.value;
  videoGamesListItem.appendChild(developer);

  const genre = document.createElement('p');
  genre.textContent = form.genre.value;
  videoGamesListItem.appendChild(genre);

  return videoGamesListItem;
}

const handleDeleteAllClick = function (event) {
  const videoGamesList = document.querySelector('#video-games-list');
  videoGamesList.innerHTML = '';
}
