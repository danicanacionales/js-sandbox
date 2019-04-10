// 22. Examining the Document Object
/*
let val;

val = document;
val = document.all.length;
val = document.body;
val = document.domain;
val = document.URL;

val = document.forms;
val = document.forms[0].id;
val = document.forms[0].method;

val = document.links[0].classList[1];
val = document.scripts[2].getAttribute('src');

console.log(val);
*/

// 23. DOM Selectors For Single Elements
/*
console.log(document.getElementById('task-title'));

document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';

console.log(document.querySelector('#task-title'));
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'green';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
*/


// 24. DOM Selectors for Multiple Elements
/*
const items = document.getElementsByClassName('collection-item');
console.log(items);

let lis = document.getElementsByTagName('li');
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

//Convert HTML Collection into array
lis = Array.from(lis);
lis.reverse();
lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}: Hello`;
})

console.log(lis);


const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
  item.textContent = `${index}: Hello`
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
  li.style.background = '#ccc';
})

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}

console.log(items);
*/


// 25. Traversing the DOM
/*
let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

//Get children element nodes
val = list.children;
val = list.children[0];
list.children[2].textContent = 'Hello';

//Children of children
val = list.children[3];
val = list.children[3].childNodes;
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

val = list.firstChild;
val = list.firstElementChild;

//Count child elements
val = list.childElementCount;

//Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

console.log(val);
*/


// 26. Creating Elements

//Create Element
const li = document.createElement('li');

//Add class
li.className = 'collection-item';

console.log(li);