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
/*
//Create Element
const li = document.createElement('li');

//Add class
li.className = 'collection-item';

//Add attribute
li.setAttribute('title', 'New Item');

//Create text node and append
li.appendChild(document.createTextNode('Hello World'));

const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';

li.appendChild(link);
//Append li as child of ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
*/


// 27. Removing & Replacing Elements
/*
const newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));

const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');
cardAction.replaceChild(newHeading, oldHeading);

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

lis[0].remove();
list.removeChild(lis[3]);

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
link.classList.add('test');
link.classList.remove('test');
val = link;
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');


console.log(val);
*/


// 28. Event Listeners & The Event Object
/*
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  // console.log('Clicked');

  let val;

  val = e.target;
  // e.target.innerText = 'Hello';
  val = e.type;
  val = e.clientY;

  console.log(val);
}
*/


// 29. Mouse Events
/*
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('#task-title');

// clearBtn.addEventListener('click', runEvent);
// clearBtn.addEventListener('dblclick', runEvent);
// clearBtn.addEventListener('mousedown', runEvent);
// clearBtn.addEventListener('mouseup', runEvent);
// clearBtn.addEventListener('mouseenter', runEvent);
// card.addEventListener('mouseleave', runEvent);
// card.addEventListener('mouseover', runEvent);
// card.addEventListener('mouseout', runEvent);
card.addEventListener('mousemove', runEvent);

function runEvent(e){
  // console.log(`EVENT TYPE: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

*/


// 30. Keyboard & Input Events
/*
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

taskInput.value = '';

// form.addEventListener('submit', runEvent);

// taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('cut', runEvent);
// taskInput.addEventListener('paste', runEvent);
select.addEventListener('change', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
  // heading.innerText = e.target.value;
  console.log(e.target.value);
  // console.log(taskInput.value);

  // e.preventDefault();
}
*/


// 31. Event Bubbling & Delegation

/*
// Event Bubbling
document.querySelector('.card-title').addEventListener('click', 
  function(){
    console.log('card title');
});

document.querySelector('.card-content').addEventListener('click',
  function(){
    console.log('card content');
});

document.querySelector('.card').addEventListener('click',
  function(){
    console.log('card');
});

document.querySelector('.col').addEventListener('click',
  function(){
    console.log('col');
});

// Event Delegation
const delItem = document.querySelector('.delete-item');
delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem); 

function deleteItem(e){
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item'); 
  // }

  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item'); 
    e.target.parentElement.parentElement.remove();
  }
}
*/


// 32. Local & Session Storage
//Set local storage item

// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

//remove from storage
// localStorage.removeItem('name');

// //get from storage
// const name = localStorage.getItem('name');
// const name2 = localStorage.getItem('age');

// localStorage.clear();
// console.log(name, name2);

document.querySelector('form').addEventListener('submit', 
  function(e){
    const task = document.getElementById('task').value;
    // localStorage.setItem('task', task);
    // alert('Task saved');

    let tasks;

    if(localStorage.getItem('tasks') === null){
      tasks = [];
    }else{
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task saved');

    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
})