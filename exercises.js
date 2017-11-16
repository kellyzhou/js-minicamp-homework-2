// Do not change any of the function names

function getBiggest(x, y) {
  if ( x > y ) {
    return x;
  }
  else {
    return y;
  }
}

function greeting(language) {
  if ( language === 'German' ) {
    var greeting = 'Guten Tag!';
  }
  else if ( language === 'English' ) {
    greeting = 'Hello!';
  }
  else if ( language === 'Spanish' ) {
    greeting = 'Hola!';
  }
  else {
    greeting = 'Hello!';
  }

  return greeting;
}

function isTenOrFive(num) {
  if ( num === 5 || num === 10 ) {
    return true;
  }
  return false;
}

function isInRange(num) {
  if ( num < 50 && num > 20 ) {
    return true;
  }
  else {
    return false;
  }
}

function isInteger(num) {
  // for negative decimals, Math.floor returns next smallest number. ex. Math.floor(-10.5) returns -11, so need to add 1 for if statement to work correctly
  if ( num < 0 && num === Math.floor(num) + 1 ) {
    return true;
  }
  // for positive numbers
  else if ( num === Math.floor( num ) ) {
    return true;
  }
  else {
    return false;
  }
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
}

// #6
function fizzBuzz(num) {
  if ( num % 5 === 0 && num % 3 === 0 ) {
    var message = 'fizzbuzz';
  }
  else if ( num % 5 === 0 ) {
    message = 'buzz';
  }
  else if ( num % 3 === 0 ) {
    message = 'fizz';
  }
  else {
    message = num;
  }
  return message;
}

function isPrime(num) {
  if ( num === 0 || num === 1 ){
    return false;
  }
  else {
    // Test if numbers are divisible by all numbers up to itself
    for ( var i = 2; i < num; i++ ) {
      if ( num % i === 0 ) {
        return false;
      }
      else {
        return true;
      }
    }
  }
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
}

function returnFirst(arr) {
  // return the first item from the array
  var firstItem = arr[0];
  return firstItem;
}

function returnLast(arr) {
  // return the last item of the array
  var lastItem = arr[arr.length - 1];
  return lastItem;
}

function getArrayLength(arr) {
  // return the length of the array
  var arrayLength = arr.length;
  return arrayLength;
}

// #11
function incrementByOne(arr) {
  // arr is an array of integers
  // increase each integer by one
  // return the array
  for ( var i = 0; i < arr.length; i++ ) {
    arr[i] += 1;
  }

  return arr;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
}

// #15
function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false

    var position = arr.indexOf(item);

    // returns -1 if not found
    if ( position > -1 ) {
      return true;
    }
    else {
      return false;
    }
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  var sum = 0;
  for ( var j = 0; j < numbers.length; j++ ){
    sum += numbers[j];
  }
  return sum;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average

  var sum = addNumbers(testScores);
  var average = sum / testScores.length;
  return average;
}

// #18
function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer

  // var largestNumber = '';
  // for ( var k = 0; k < numbers.length; k++ ) {
  //   return
  // }
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};