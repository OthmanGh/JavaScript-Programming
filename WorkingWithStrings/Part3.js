const airline = 'MEA Air Lines';
const plane = 'CH176';

//! split method :
console.log('Cristian Demark'.split(''));
const [firstName, lastName] = 'Cristian Demark'.split(' ');

console.log(firstName);

//! Join method
const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const passenger = 'jessica anN sMIth davis';

const captialize = (name) => {
  let words = name.split(' ');
  const formattedWords = [];
  for (let word of words) {
    // word = word[0].toUpperCase() + word.slice(1);
    formattedWords.push(
      word
        .replace(word[0], word[0].toUpperCase())
        .replace(word.slice(1), word.slice(1).toLowerCase())
    );
  }
  return formattedWords.join(' ');
};
newFormat = captialize(passenger);

console.log(newFormat);
console.log('\n');

//! Padding String
const message = 'Go to gate 231';
console.log('Othman'.padStart(14, '+').padEnd(22, '-'));

const maskCreditCard = function (number) {
  str = number + '';
  last = str.slice(-4);
  console.log(last.padStart(str.length, '*'));
};

maskCreditCard(43254070878907);
maskCreditCard('34987504387034853044');
maskCreditCard(234323244353453);

//! Repeat Method :
const message2 = `Bad Weather... All Departures
 Delayed`;
console.log(message.repeat(4));

const planeInLine = (n) => `There are ${n} planes in line ${'✈️'.repeat(n)}`;

console.log(planeInLine(3));
