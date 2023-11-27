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

  orderPizza: function (mainIng, otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

// Logical operators can use any data type, return any data type, short-circuiting

// In case of OR operator short-circuiting means that if the first value is truthy value it will immediately return that first value
console.log('------- OR -------');
console.log(3 || 'z');

console.log(undefined || null);
console.log(null || undefined);
console.log('' || 0 || undefined || null || NaN || false || 'x');
console.log('' || 23 || undefined);

// ! note that 0 is a falsey value too...
restaurant.numGuests = 0;

const guests1 = restaurant.numGuests || 10;
console.log(guests1);

// in case of AND operator it short-circuts when the first value is falsey then immediatley return that value without evaluating the second operand

console.log('------- AND -------');

console.log(null && 'o');
console.log(23 && 'w' && undefined && 'i');
console.log(true && 'y' && 100);

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// Nullish Coalescing Operator introduced in es 2020

// nullish coalescing operator works with the idea of nullish values instead of falsey values

// Nullish Values : null, undefined

restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
const guests = restaurant.numGuests ?? 10;
console.log(guests);
