// let migrating = true;

//       let fly = function (num) {
//         for (let i = 0; i < num.length; i++) {
//           alert("Flying!");
//         }
//       };

//       function quack(num) {
//         for (let i = 0; i < num.length; i++) {
//           alert("Quack!");
//         }
//       }

//       let superFly = fly;
//       superFly(2);

//       let superQuack = quack;
//       superQuack(3);

// if (migrating) {
//   quack(4);
//   fly(4);
// }
// ----------------------------------------
// let winner = function () {
//   console.log("WINNER!");

// };
// let loser = function () {
//   console.log("LOSER!");
// };

// winner();

// let a = winner;
// let b = loser;
// let c = loser;
// a();
// b();

// c = a;
// a = b;
// b = c;
// c = a;
// a = c;
// a = b;
// b = c;
// a();
// ----------------------------------

// let passengers = [
//   { name: "Jane Doloop", paid: true, ticket: "coach" },
//   { name: "Dr. Evel", paid: true, ticket: "firstclass" },
//   { name: "Sue Property", paid: false, ticket: "firstclass" },
//   { name: "John Funcall", paid: true, ticket: "coach" },
// ];

// function processPassengers(passengers, testFunction) {
//   for (let i = 0; i < passengers.length; i++) {
//     if (testFunction(passengers[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// function checkNoFlyList(passenger) {
//   return passenger.name === "Dr. Evel";
// }

// function checkNotPaid(passenger) {
//   return !passenger.paid;
// }

// function printPassenger(passenger) {
//   console.log(
//     passenger.paid
//       ? `${passenger.name} has paid`
//       : `${passenger.name} has not paid`
//   );
// }

// function createDrinkOrder(passenger) {
//   let orderFunction;
//   if (passenger.ticket === "firstclass") {
//     orderFunction = function () {
//       alert("Would you like a cocktail or wine?");
//     };
//   } else {
//     orderFunction = function () {
//       alert("You choice is cola or water.");
//     };
//   }
//   return orderFunction;
// }

// function serveCustomer(passenger) {
//   let getDrinkOrderFunction = createDrinkOrder(passenger);
//   getDrinkOrderFunction();
// }

// function servePassengers(passengers) {
//   for (let i = 0; i < passengers.length; i++) {
//     serveCustomer(passengers[i]);
//   }
// }

// servePassengers(passengers);

// let allCanFly = processPassengers(passengers, checkNoFlyList);
// if (!allCanFly) {
//   console.log(
//     "The plane can't take off: we have a passenger on the no-fly-list."
//   );
// }

// let allPaid = processPassengers(passengers, checkNotPaid);
// if (!allPaid) {
//   console.log("The plane can't take off: not everyone has paid.");
// }

// processPassengers(passengers, printPassenger);
// --------------------------------------------------------

// let numberArray = [60, 50, 62, 58, 54, 54];

// numberArray.sort(compareNumbers);

// console.log(numberArray);

// function compareNumbers(num1, num2) {
//   if (num1 > num2) {
//     return 1;
//   } else if (num1 === num2) {
//     return 0;
//   } else {
//     return -1;
//   }
// }
// -----------------------------------------------------------

let products = [
  { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
  { name: "Orange", calories: 160, color: "orange", sold: 12101 },
  { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
  { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
  { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
  { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
  { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
  { name: "Water", calories: 0, color: "clear", sold: 62123 },
];

function compareSold(colaA, colaB) {
  if (colaA.sold > colaB.sold) {
    return 1;
  } else if (colaA === colaB) {
    return 0;
  } else {
    return -1;
  }
}

function printProducts(products) {
  for (let i = 0; i < products.length; i++) {
    console.log(
      `Name ${products[i].name}, Calories: ${products[i].calories}, Color: ${products[i].color}, Sold: ${products[i].sold}`
    );
  }
}

products.sort(compareSold);
printProducts(products);
