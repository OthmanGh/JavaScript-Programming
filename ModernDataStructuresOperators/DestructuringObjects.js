// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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
};

// ! To destructure obejcts we use the curly braces, then provide variables names that exactly matche the propertry names that we want to retrieve from the object

const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

// what if we want different variable name ?
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// setting default value
const { menu = 'default value', starterMenu: startes = [] } = restaurant;
console.log(menu, startes);

// Mutating variables:
let a = 444;
let b = 888;

const obj = { a: 23, b: 10, c: 27 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects :
const {
  fri: { open: openHour = '00', close: closeHour = '00' },
} = restaurant.openingHours;

console.log(openHour, closeHour);

// passing object as parameter
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole 21',
  mainIdx: 2,
  startIdx: 2,
});
