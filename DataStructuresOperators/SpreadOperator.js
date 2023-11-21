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

  // Methods :
  orderDelivery: function ({
    startIdx = 1,
    time = '10:00',
    address,
    mainIdx = 0,
  }) {
    console.log(
      `Order received! ${this.starterMenu[startIdx]} and ${this.mainMenu[mainIdx]} will be deliverd to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

// Spread Operator used to basically expand an iterable (arrays, strings, maps, sets...etc) into all its elements

// first situation 1 :  whenever we need elements individually
const arr = [7, 8, 9];
const newArr = [5, 6, ...arr];
console.log(newArr);

// Second situation 2 :  when we pass arguments into functions
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// * spread operator is a bit similar to destructuring since it also helps us get elements out of arrays. Big difference is that the spread operator takes all elements from the array and doesn't create a new variables.Spread operator can be used in a places where we would otherwise write values seperated by commas..

// ! Two Important use cases of spread operators :

//* 1 - Create a shallow copies of arrays
const mainMenuCopy = [...restaurant.mainMenu];

//* 2 - Merge 2 arrays together
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// ! Iterables: arrays, strings, maps, sets, NOT objects

const str = 'boring';
const letters = [...str, '', '#.'];
console.log(letters);

// we can use spread operator when building an array or when passing a value into function

// const ingredients = [
//   prompt("Let's make pasta 1?"),
//   prompt("Let's make pasta 2?"),
//   prompt("Let's make pasta 3?"),
// ];

const ingredients = ['any1', 'any2', 'any3'];

console.log(ingredients);
restaurant.orderPasta(...ingredients);

// Since es 2018, spread Operators also works on objects, even though objects are not iterables

const newRestaurant = { foundIn: 1997, ...restaurant, founderr: 'Antonia' };

newRestaurant.location = 'Milano';

console.log(newRestaurant);
console.log(restaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';

console.log(restaurant);
console.log(restaurantCopy);
