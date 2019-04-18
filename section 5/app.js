// 43. Constructors & the 'this' keyword
/*
function Person (name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const danica = new Person('Danica', '10-23-1997');
console.log(danica.calculateAge());
*/


// 44. Built In Constructors

// 45. Prototypes Explained
/*
function Person (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}

const john = new Person('john', 'the baptist', '10-23-1997');
const mary = new Person('Mary', 'had a little lamb', '12-25-1980');

console.log(mary);
console.log(john.calculateAge());
console.log(mary.getFullName());

mary.getsMarried('Smith');
console.log(mary.getFullName());
console.log(mary.hasOwnProperty('firstName'));
console.log(Person.prototype.hasOwnProperty('getFullName'));
*/


// 46. Prototypal Inheritance
/*
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');
// console.log(person1.gretting());

function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}
Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

const customer1 = new Customer('Mary', 'Jane', '123-456', 'Standard');
console.log(customer1);

Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome`;
}

console.log(customer1.greeting());
*/


// 47. Using Object.create
/*
const personPrototypes = {
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;
mary.getsMarried('Thompson');

console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
    firstName: {value: 'Brad'},
    lastName: {value: 'Traversy'},
    age: {value: 36}
});

console.log(brad.greeting());
*/


// 48. ES6 Classes
/*
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello world ${this.firstName}`;
    }

    static addNumbers(x, y){
        return x + y;
    }
}

const mary = new Person('Mary', 'Williams');
console.log(mary);
console.log(mary.greeting());
console.log(Person.addNumbers(1, 2));
*/


// 49. Sub Classes
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello world ${this.firstName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }
}

const john = new Customer('john', 'doe', '1234-5678', 'standard');
console.log(john);
console.log(john.greeting());