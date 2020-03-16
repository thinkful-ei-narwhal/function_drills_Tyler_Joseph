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