'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },
};

//* Destructuring is an es6 feature a way of unpacking values from an array or an object into separate variables. So in other words destructring is to break a complex data structure down into a smaller data structure like a variable...

const arr1 = [10, 20, 30];

// instead of writing this way we can use destructuring
// const a = arr1[0];
// const b = arr1[1];
// const c = arr1[2];

const [a, b, c] = arr1;
console.log(a, b, c);

console.log(arr1); // not original array not affected

const [first, , third] = restaurant.categories;
console.log(first, third);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

//! Swaping variables using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, main1] = restaurant.order(1, 2);
console.log(starter, main1);

// nested destructuring :
const nested = [20, 40, [60, 80]];

const [firstNested, , [nested1, nested2]] = nested;
console.log(firstNested, nested1, nested2);

// setting default values
const [i = 0, j = 0, k = 0] = [8, 9];
console.log(i, j, k);
