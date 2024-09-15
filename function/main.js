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

let winner = function () {
  console.log("WINNER!");
  
};
let loser = function () {
  console.log("LOSER!");
};

winner();

let a = winner;
let b = loser;
let c = loser;
a();
b();

c = a;
a = b;
b = c;
c = a;
a = c;
a = b;
b = c;
a();
