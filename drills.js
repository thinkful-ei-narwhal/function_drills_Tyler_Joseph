/* eslint-disable strict */
function createGreeting(name, age) {
    const yearOfBirth = 2020 - age;
    return `Hello my name is ${name} and I'm ${age} and I was born in ${yearOfBirth}.`;
}

function yearOfBirth(age) {
    return 2020 - age;
}

let greeting = createGreeting();

console.log(greeting);