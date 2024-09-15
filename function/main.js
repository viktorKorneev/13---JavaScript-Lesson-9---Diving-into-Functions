let migrating = true;

      let fly = function (num) {
        for (let i = 0; i < num.length; i++) {
          alert("Flying!");
        }
      };

      function quack(num) {
        for (let i = 0; i < num.length; i++) {
          alert("Quack!");
        }
      }

      let superFly = fly;
      superFly(2);

      let superQuack = quack;
      superQuack(3);

      // if (migrating) {
      //   quack(4);
      //   fly(4);
      // }