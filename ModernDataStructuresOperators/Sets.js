// Set : a collection of unique values, order of elements in set is irrlevent

const players = new Set(['Ronaldo', 'Messi', 'Ramos', 'Salah']);
console.log(players);

console.log(new Set('Jack'));
console.log(new Set());

//* size property:
console.log(players.size);

//* has method check if element exist on the set :
console.log(players.has('Messi'));
console.log(players.has('Benzema'));

//* Add new elements to a set using add method :
players.add('Mahrez');
players.add('Mahrez');
console.log(players);

//* clear method:
// console.log(players.clear());

//* delete elements :
players.delete('Messi');
console.log(players);

//* There is no way of getting values out of a set

for (const player of players) console.log(player);

// Example :
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const uniqueStaff = new Set(staff);

// get rid of duplicates :
console.log(uniqueStaff);

console.log([...uniqueStaff]); // convert to array

console.log(new Set('Othman Al Ghandour'));
