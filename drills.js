/* eslint-disable strict */
function createGreeting(name, age) {
  const yearOfBirth = 2020 - age;
  return `Hello my name is ${name} and I'm ${age} and I was born in ${yearOfBirth}.`;
}

function yearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative!');
  }
  return 2020 - age;
}

try {
  let greeting = createGreeting();
} catch(err) {
  
}

console.log(greeting);