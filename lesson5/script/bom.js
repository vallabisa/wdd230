// Create three variables that hold references to the input, button, and list elements using const.
const list = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.querySelector('input');

// Create an click event listener for the Add Chapter button using addEventListener and an anonymous function. 
button.addEventListener('click', function() {

let myItem = input.value;
input.value = '';

const listItem = document.createElement('li');
const listText = document.createElement('span');
const listBtn = document.createElement('button');

listItem.appendChild(listText);
listText.textContent = myItem;
listItem.appendChild(listBtn);
listBtn.textContent = '❌';
list.appendChild(listItem);

listBtn.onclick = function(e) {
  list.removeChild(listItem);
}

input.focus();
})