// console.log("I");

// console.log("eat");

// console.log    ("ice cream");

//Asyncronous
// console.log("I")

// setTimeout(() => {
//     console.log("eat");
// },2000)

// console.log("ice cream")

// Dealing with promises

let stocks = {
  fruits: ["strawbery", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        // work is 👇 getting done here
        resolve(work());

        // Setting 👇 time here for 1 work
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
};

// Set 👇 time here
order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
  //    pass a ☝️ function here to start working

  .then(() => {
    return order(1000, () => console.log("production has started"));
  })

  // step 3
  .then(() => {
    return order(2000, () => console.log("Fruit has been chopped"));
  })

  // step 4
  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
    );
  })

  // step 5
  .then(() => {
    return order(1000, () => console.log("start the machine"));
  })

  // step 6
  .then(() => {
    return order(2000, () =>
      console.log(`ice cream placed on ${stocks.holder[1]}`)
    );
  })

  // step 7
  .then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
  })

  // Step 8
  .then(() => {
    return order(2000, () => console.log("Serve Ice Cream"));
  })

  .finally(() => {
    console.log("end of day");
  });

function toppings_choice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("which topping would you love?"));
    }, 3000);
  });
}

async function kitchen() {
  console.log("A");
  console.log("B");
  console.log("C");

  await toppings_choice();

  console.log("D");
  console.log("E");
}

// Trigger the function

kitchen();

console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking orders");

// let order = (fruit_name, call_production) => {
//   setTimeout(function () {
//     console.log(`${stocks.fruits[fruit_name]} was selected`);
//     // Order placed. Call production to start
//     call_production();
//   }, 2000);
// };
// let production = () => {
//   setTimeout(() => {
//     console.log("Production has started");
//   }, 1000);
// };

// //function evocation
// order(1, production);

// // name 👇 of our second function

let production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("The fruit has been chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
        setTimeout(() => {
          console.log("start the machine");
          setTimeout(() => {
            console.log(`Ice cream placed on ${stocks.holder[1]}`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} as toppings`);
              setTimeout(() => {
                console.log("serve Ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 500);
};

// error handling
// let is_shop_open = false;
// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
//       if (is_shop_open) {
//         setTimeout(() => {
//           // work is 👇 getting done here
//           resolve(work());

//           // Setting 👇 time here for 1 work
//         }, time);
//       } else {
//         reject(console.log("Our shop is closed"));
//       }
//     });
//   };

//   // Set 👇 time here
//   order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
//   //    pass a ☝️ function here to start working

//   .catch(()=>{
//     console.log("Customer left")
//   })
