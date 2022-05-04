const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything = (stringItem) => {
  stringItem.forEach(politelyDecline);
}

const acceptEverything = (arr) => {
  for (item of arr) {
    console.log(`Ok, I guess I will eat some ${item}`);
  }
}

console.log(declineEverything(veggies));

console.log(acceptEverything(veggies))

const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
const squareNums = (arr) => {
  let finalArray = [];
  arr.map(num => {
    finalArray.push(toSquare(num));
    console.log(num);
  });
  return finalArray;
}

console.log(squareNums(numbers));

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

const shoutGreetings = (stringItem) => {
  let finishedProduct = [];
  stringItem.map(word => {
    finishedProduct.push(word.toUpperCase() + "!");
  })
  return finishedProduct;
}

console.log(shoutGreetings(greetings));

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

const sortYears = (years) => {
  return years.sort(function(small, large) {
    return large - small;
  });
}

console.log(sortYears(years));
