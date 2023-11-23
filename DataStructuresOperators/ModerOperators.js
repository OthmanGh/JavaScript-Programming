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

//!  for-of Loop :

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Tradditional way :
// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }

// for (const item of menu) console.log(item);
for (const [idx, item] of menu.entries()) console.log(`${idx + 1} : ${item}`);
//console.log([...menu.entries()]);

/*************************************************************/

// ! Optional - Chaining is ES 2020 feature, which returns undefined immediately if a certain property doesn't exist on a specific object

// It allows you to access properties of an object without the need to explicitly check if each nested property exists.

// With optional chaining, if a property in the chain is null or undefined, the expression short-circuits, and the entire chain evaluates to undefined.

// check if monday exist on openinghours object has friday && if its exist in the first place
if (restaurant.openingHours.fri && restaurant.openingHours)
  console.log(restaurant.openingHours.fri.open);

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

//* With optional chaining ?
console.log(restaurant.openingHours.mon?.open);
//console.log(restaurant.openingHours.mon.open); error !!

// example :
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  restaurant.openingHours[day]?.open === undefined
    ? console.log(`${restaurant.name} is closed on ${day}`)
    : console.log(`${restaurant.name} is open on ${day}`);
}

// On Methods :
console.log(restaurant.orderPizza?.(0, 1) ?? 'Method does not exist');

console.log(restaurant.cancelOrder?.(1) ?? 'Method does not exist');

// Arrays :
const users = [{ name: 'Jack', emial: 'jack@gmail.com' }];

console.log(users[0]?.name ?? 'User array empty');
console.log(users[1]?.name ?? 'User array empty');

/*************************************************************/

// ! Looping Objects  : keys, values, entries

// Property Names : Object.keys(obj)
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(restaurant.openingHours)) {
  openStr += `${day}, `;
}

console.log(openStr);

// Property Values : Object.values(obj)
const values = Object.values(restaurant.openingHours);
console.log(values);

// Entire object
const entries = Object.entries(restaurant.openingHours);

console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
