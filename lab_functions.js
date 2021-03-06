// Create the following functions and test them by logging out their return value.

// MVP

// Part 1

var myNumbers = [1,2,3,4,5,6,7,8]

// 1.a Total the numbers - Create a function that takes in an array of numbers as an argument and calculates the sum of the array's numbers.

function sumNums(numArray) {
  var total = 0;
  for ( var number of numArray) {
    total += number;
  }
  return total;
}

console.log(sumNums(myNumbers));

// 1.b Find the evens - Create a function that takes in an array of numbers as an argument and returns a new array containing just the even numbers.
// var evensNum = (numArray) => {
//   for (var number of numArray) {
//     if (number%2 === 0) {
//       evensNum.push(number);
//     }
//   }
//   // console.log(evensNum);
// }
//
// result = evensNum(myNumbers);
//
// console.log(result);

var evens = [];
function evenNums(numArray) {
  for ( var number of numArray) {
    if (number%2 === 0) {
      evens.push(number);
//    console.log("hi");
    }
  }
  return evens;
}

console.log(evenNums(myNumbers));

// Part 2

var myBill = [
  {
    meal: 'Green Curry',
    price: 10,
    customer: 'Sally'
  }, {
    meal: 'Sea Bass',
    price: 12,
    customer: 'Upul'
  }, {
    meal: 'Fish and Chips',
    price: 10,
    customer: 'Rita'
  }, {
    meal: 'Stick Toffee Pudding',
    price: 4,
    customer: 'Upul'
  }, {
    meal: 'Apple Pie',
    price: 5,
    customer: 'Sally'
  }
]

// 2.a. Total the bill - Create a function that takes in a bill as an argument and calculates the total cost of the bill.

var total = (items) => {
  var count = 0;
  for (var item of items) {
    count += item.price;
  }
  return count;
}
console.log(total(myBill));

// 2.b. Find meals by customer name - Create a function that takes in a bill and a customer name as an argument and returns a new array containing all the items for that customer.

const findMeals = (billArray, name) => {
  const customerMeals = [];
  for (var bill of billArray) {
    if (name === bill.customer) {
      customerMeals.push(bill.meal);
    }
  }
  return customerMeals;
};

console.log('Meals: ' + findMeals(myBill, "Sally"));

// 2.c. Using the functions you wrote in part 4 and 5, find the total that Sally spent.



const totalCost = (billArray, name) => {
  const meals = findMeals(billArray, name);
  // loop through billArray checking for each meal
  // if found,
};


// 2.d. Find average item price - Create a function that takes in bill as an argument and calculates the average price of all the items.

// Extension

// Part 3
// Have a look at the following bodyBuilder object.

var bodyBuilder = {
  strength: 2,
  workOut: (mins) => {
    bodyBuilder.strength = bodyBuilder.strength * mins;
  },
  lazeAbout: (hours) => {
    bodyBuilder.strength = bodyBuilder.strength / hours;
  }
}

// 3.a. Log out the the bodyBuilder's strength - the value should be 2.

console.log(bodyBuilder.strength);

// 3.b. Use the workOut function to update the bodyBuilder's strenth.

bodyBuilder.workOut(5);
console.log(bodyBuilder.strength);

// 3.c. Create another function on the bodyBuilder called `lazeAbout`, that takes in a number of hours as an argument. Decrease the bodyBuilder's strength by dividing the strength by the number of hours.

bodyBuilder.lazeAbout(2);
console.log(bodyBuilder.strength);
