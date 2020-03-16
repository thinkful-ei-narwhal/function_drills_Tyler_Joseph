/* eslint-disable strict */
function createGreeting(name, age) {
    const yearOfBirth = 2020 - age;
  
    return `Hello my name is ${name} and I'm ${age} and I was born in ${yearOfBirth}.`;
}

let greeting = createGreeting();

console.log(greeting);