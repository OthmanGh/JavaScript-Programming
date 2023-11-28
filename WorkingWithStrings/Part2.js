const airline = 'MEA Air Lines';
const plane = 'CH176';

// tolowerCase && toUpperCase():
console.log(airline.toUpperCase());
console.log('JACK'.toLowerCase());

// Fix capitalization in name :
const passenger = 'jOHn'; // Jonsa

const formatPassengerName = (passenger) =>
  passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();

formattedPassengerName = formatPassengerName(passenger);
console.log(formattedPassengerName);
console.log('\n');

// trim method :
// comparing emails
const email = 'hello@zeke.io';
const loginEmail = '    Hello@zeke.Io\n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// * Chain methods :
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(normalizedEmail === email);

// there is also trimStart and trimEnd....

//* replace and replaceAll methods :
const priceGB = '283,342£';
const priceUs = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUs);

const announcement =
  'All passengers come to boarding door 23, Boarding door 23';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans Methods : includes, startWith, endsWith

const plane1 = 'A34neo';
console.log(plane1.includes('z'));
console.log(plane1.includes('neo'));
console.log(plane1.startsWith('A34'));

console.log(plane1.endsWith('zeo'));
console.log(plane1.endsWith('eo'));

// Practice excercise :

const checkBaggae = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('You are NOT Allowd on board');
  else console.log('Welcome aboard');
};

checkBaggae('I have a laptop, some Food and a pocket Knife');
checkBaggae('Socks and camera');
checkBaggae('Got some snacks and a gun for protection');
