function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // create a new button
    let button = document.createElement('button');

    // set the button title
    button.textContent = 'Delete';

    // set the button class
    button.className = 'mdl-button mdl-js-button mdl-button--accent';

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the button to the li
    newLi.appendChild(button);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';

  });
}

  toDoList.addEventListener('click', event => {

    // remove the li
    event.target.parentNode.remove();

  })

window.onload = function() {
  onReady();
};
