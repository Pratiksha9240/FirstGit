var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);

itemList.parentElement.style.backgroundColor = '#f4f4f4'

console.log(itemList.lastChild);
console.log(itemList.lastElementChild.innerText);


console.log(itemList.firstChild);
console.log(itemList.firstElementChild.innerText);

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

newElement = document.createElement('div');
newElement.className = 'div';
newElement.id = 'newDiv';

newElement.setAttribute('title','Hello World');

textDiv = document.createTextNode('Hello world');
newElement.appendChild(textDiv);

console.log(newElement);

container = document.querySelector('header .container');
h1 = document.querySelector('header h1');

items = document.querySelector('ul')
item1 = document.querySelector('ul li');

container.insertBefore(newElement,h1);
items.insertBefore(newElement,item1);