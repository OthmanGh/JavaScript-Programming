const airline = 'MEA Air Lines';
const plane = 'CH176';

//? Read char from a string
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[3]);

//? Read Length property:
console.log(airline.length);
console.log('123493'.length);
console.log('\n');

// String Methods :

// 1 - indexOf method
//params : (searchString, postion)
// return index of first occurence, if str not found returns -1
//  lastIndexOf return index of last occurence

console.log('indexOf Method');
console.log(airline.indexOf('Air'));
console.log(plane.indexOf('z'));
console.log(airline.indexOf('i', 7));
console.log(airline.lastIndexOf('i'));
console.log('\n');

// 2 - Slice Method original array or method is not modified
// params : (start, end) // don't include the end
console.log(airline.slice(4)); // return a new substring
console.log(airline.slice(4, 7));

// let's extract first word of air lines :
console.log(airline.slice(0, airline.indexOf(' '))); // MEA
// let's extract last word of air lines :
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// extracting from the end
console.log(airline.slice(-5));
console.log(airline.slice(0, -6));

// write a function that receive an air plane seats and logs to the console wether it is a middle seat or not, B and E are middle seats
const checkMiddleSeat = (seat) => {
  // take last character then check if its B || E
  s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log(`You got the middle seat`);
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
console.log('\n');

// how can these methods works on string despite they're primitive data type ?
// whenever a method is called on a string js will automatically convert that string primitive to a string object with the same content and on that object where the methods are called, this process called boxing
// example :

console.log(new String('zeke'));
console.log(typeof new String('zeke'));
// all string methods return primitives
console.log(typeof new String('zeke').slice(1));
