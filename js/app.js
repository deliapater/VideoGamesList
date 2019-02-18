
document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

});

const handleNewItemFormSubmit = function(event) {
  event.preventDefault();

  const listElement = document.createElement('li');

  const title = createElementWithText('h2', this.title.value, listElement);
  const developer = createElementWithText('h3', this.developer.value, listElement);
  const genre = createElementWithText('p', this.genre.value, listElement);
  const platform = createElementWithText('p', this.platform.value, listElement);


  const videoGamesList = document.querySelector('#video-games-list');
  videoGamesList.appendChild(listElement);

  this.reset();
};


const createElementWithText = function(element, text, parent){
  const newElement = document.createElement(element);
  newElement.textContent = text;
  parent.appendChild(newElement);
};

const handleDeleteAllClick = function (event) {
  const videoGamesList = document.querySelector('#video-games-list');
  videoGamesList.innerHTML = '';
}
