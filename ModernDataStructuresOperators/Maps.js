//* a map is a data structure that we can use to map values to keys, so data stored in key-value pairs in maps

// Big difference between Objects and Maps is that keys can be any data type in maps, it can be even other map, object,array...etc

const match = new Map();

//Set Data :  to fill up the map set method is used && it returns the updated map
match.set('home', 'Real Madrid');
match.set('away', 'Barcelona');
console.log(match);

match
  .set('team 1 goals', 3)
  .set('team 2 goals', 1)
  .set('real wins', true)
  .set(true, 'match started')
  .set(false, "match didn't start yet!!");

console.log(match);

// Read Data : get method
console.log(match.get('home'));
//console.log(match.get(true));

const startedTime = 21;
match.get(false);
match.get(true);

//* size property:
console.log(match.size);

//* has method :
console.log(match.has('home'));
console.log(match.has('winner'));

//* delete method :
match.delete('real wins');
console.log(match);

//* clear
match.clear();

match.set(['real', 'barca'], 'Tonight Match');

console.log(match);

console.log(match.get(['real', 'barca'])); // passed arrays are not the same object in the heap, that's why we get undefined
