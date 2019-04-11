// Section 2 - JavaScript Language Fundamentals

// 5. Using The Console
/*console.table({a:1, b:2});

console.time('Hello');

console.log('World');
console.log('World');
console.log('World');

console.timeEnd('Hello');
*/


// 6. Variables - var, let & const
/*const person = {
    name: 'John',
    age: 30
}

person.name = 'Sara';

// console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);
*/


// 7. Data Types in JavaScript
/*const name = 'John Doe';

const sym = Symbol();

const hobbies = ['movies', 123]

console.log(typeof hobbies[1]);
*/



// 8. Type Conversion

/*let val;
val = String(555);
// val = (true).toString();
val = Number(true);

val = parseInt('100.30');
val = parseFloat('100.32');
console.log(val);
console.log(typeof val);
// console.log(val.length);

// Type coersion
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);
*/




// 9. Numbers & The Math Object
/*
const num1 = 100;
const num2 = 50;
let val;

val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.min(2,33,4,1,55,6,3,-2);
val = Math.max(2,33,4,1,55,6,3,-2);
val = Math.random();

val = Math.random() * 20; //Random number with decimal between 0 and 19
val = Math.random() * 20 + 1; //Random number with decimal between 1 and 20
val = Math.floor(Math.random() * 20 + 1); //Random whole number between 1 and 20
console.log(val);
*/



// 10. String Methods & Concatenation
/*const firstName = 'Danica';
const lastName = 'Nacionales';
const str = 'Hello there this is Austin';
let val;

val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName;
val = firstName.concat(' ', lastName);

//Appending - add on to a variable
val = 'Danica ';
val += 'Nacionales';

val = firstName[2];

//indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

//chatAt()
val = firstName.charAt(0);

//substring()
val = firstName.substring(0, 4);

//slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

//split()
val = str.split(' ');

//replace()

//includes()
val = str.includes('Hello');

console.log(val);
*/


// 11. Template Literals
/*const name = 'John'
const age = 30;
const job = 'Web Developer';
const city = 'Miami';

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
    </ul>
`

document.body.innerHTML = html;
*/



// 12. Arrays & Arrays Method
/*
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

//Mutating arrays
//Add on to end
// numbers.push(250);
// //Add on to front
// numbers.unshift(150);

// //Take off from end
// numbers.pop();
// //Take off from front
// numbers.shift();
// //Splice
// numbers.splice(1, 3);
// //Reverse
// numbers.reverse();

// //Sort array
// val = numbers.sort();
// //Use the compare function
// val = numbers.sort(function(x, y){
//     return x - y;
// });

// val = numbers.sort(function(x, y){
//     return y - x;
// });

//Find
function under50(num){
    return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
*/


// 13. Object Literals
/*
const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 32,
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 2019 - this.age;
    }
}

let val;
val = person;

val = person.firstName;
val = person['firstName'];
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();

console.log(val);
*/


// 14. Dates & Times

// 15. If Statements & Comparison Operators
/*
const id = 100;

//EQUAL TO
if(id == 100){
    console.log('Correct');
}else{
    console.log('Incorrect');
}

//EQUAL TO Value and type
if(id === 100){
    console.log('Correct');
}else{
    console.log('Incorrect');
}

//Test if undefined
if(typeof id !== 'undefined'){
    console.log(`The ID is ${id}`);
}else{
    console.log('No ID');
}

//Ternary Operator
console.log(id === 100 ? 'Correct' : 'Incorrect')
*/




// 16. Switches


// 17. Function Declarations & Expressions
/*
const square = function(x){
    return x * x;
};

console.log(square(8));

//Immediately invokable function expressions - IIFEs
(function(name){
    console.log('testing ' + name);
})('doi');

const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id ){
        console.log(`Edit todo: ${id}`);
    }
}

todo.add();
todo.edit(3);
*/



// 18. General Loops
/*
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
});

const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Sara'},
    {id: 3, name: 'Karen'}
]

const ids = users.map(function(user){
    return user.name;
});

console.log(ids);

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 23
}

for(let x in user){
    console.log(`${x}: ${user[x]}`);
}
*/



// 19. A Look At The Window Object
