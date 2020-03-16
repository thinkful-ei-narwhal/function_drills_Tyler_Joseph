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

function monthDays(month, leapYear) {
  switch (month) {
    case 'January':
      return 'January has 31 days';
      break;
    case 'February':
      if (leapYear) {
        return 'February has 29 days this year';
      }
      return 'February has 28 days this year';
      break;
    case 'March':
      return 'March has 31 days this year';
      break;
    case 'April':
      return 'April has 30 days this year';
      break;
    case 'May':
      return 'May has 31 days this year';
      break;
    case 'June':
      return 'June has 30 days this year';
      break;
    case 'July':
      return 'July has 31 days this year';
      break;
    case 'August':
      return 'August has 30 days this year';
      break;
    case 'September':
      return 'September has 31 days this year';
      break;
    case 'October':
      return 'October has 30 days this year';
      break;
    case 'November':
      return 'November has 31 days this year';
      break;
    case 'December':
      return 'December has 30 days this year';
      break;
    default:
      throw new Error('Please return a valid month');
  }
}

console.log(monthDays('monkey'));