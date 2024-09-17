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

let passengers = [
  { name: "Jane Doloop", paid: true, ticket: "coach" },
  { name: "Dr. Evel", paid: true, ticket: "firstclass" },
  { name: "Sue Property", paid: false, ticket: "firstclass" },
  { name: "John Funcall", paid: true, ticket: "coach" },
];

function processPassengers(passengers, testFunction) {
  for (let i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
      return false;
    }
  }
  return true;
}

function checkNoFlyList(passenger) {
  return passenger.name === "Dr. Evel";
}

function checkNotPaid(passenger) {
  return !passenger.paid;
}

function printPassenger(passenger) {
  console.log(
    passenger.paid
      ? `${passenger.name} has paid`
      : `${passenger.name} has not paid`
  );
}

function serveCustomer(passenger) {
  if (passenger.ticket === "firstclass") {
    alert("Would you like a cocktail or wine?");
  } else {
    alert("Your choice is cola or water.");
  }
}

let allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
  console.log(
    "The plane can't take off: we have a passenger on the no-fly-list."
  );
}

let allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
  console.log("The plane can't take off: not everyone has paid.");
}

processPassengers(passengers, printPassenger);
