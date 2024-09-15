let migrating = true;

let fly = function (num) {
  for (let i = 0; i < num.length; i++) {
    console.log("Flying!");
  }
};

function quack(num) {
  for (let i = 0; i < num.length; i++) {
    console.log("Quack!");
  }
}

if (migrating) {
  quack(4);
  fly(4);
}


