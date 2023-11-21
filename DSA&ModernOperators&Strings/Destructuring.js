'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
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
