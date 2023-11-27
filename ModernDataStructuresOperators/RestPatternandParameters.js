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

// rest Pattern looks exactly like spread operator so it has the same syntax but it actually does the opposite.
// it collects multiple elements and condense them into an array

// Destructuring :

// spread, since on right side of =
const arr = [1, 2, ...[3, 4]];

// REST, since on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

// ! rest syntax collects all array elements aftter the last varaibles
console.log(otherFood);
console.log(pizza);
console.log(risotto);

// Objects :
const { sat, ...weekDays } = restaurant.openingHours;

console.log(weekDays);

// 2) Functions :
const add = (...num) => {
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log(sum);
};

add(5, 6);
add(10, 20, 30);
add(-10, 23, 65, 93, 67);

const x = [17, 10, 27];

add(...x);
