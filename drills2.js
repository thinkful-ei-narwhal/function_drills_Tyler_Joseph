// eslint-disable-next-line strict
function jediName(firstName, lastName) {
  //first two letters + first three letters
  let part1 = firstName.slice(0, 2);
  let part2 = lastName.slice(0, 3);
  return `May the Force be with ${part2}${part1}.`;
};

console.log(jediName("Joseph", "Tyler"))

function beyond(num) {
  if (num == Infinity) {
    console.log('And beyond!');
  } else if (num > 0) {
    console.log('To infinity');
  } else if (num < 0) {
    console.log('To negative infinity');
  } else {
    console.log('Staying home');
  }
}

beyond(Infinity);

//each character into a five letter word

function decode(word){
  let action1 = word.split(" ");
  let passPhrase = "";
  for (let i = 0; i < action1.length; i++) {
    if (action1[i][0] === "a") {
      passPhrase += action1[i][1];
    } else if (action1[i][0] === "b") {
      passPhrase += action1[i][2];
    } else if (action1[i][0] === "c") {
      passPhrase += action1[i][3];
    } else if (action1[i][0] === "d") {
      passPhrase += action1[i][4];
    } else {
      passPhrase += " ";
    }   
  }

  return passPhrase;
    
};

console.log(decode("craft block argon meter bells brown croon droop"));