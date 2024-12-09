// 1. difference between the first and second arguments.
function calculateDifference(a, b) {
  return a - b;
}
console.log(calculateDifference(9, 3));


// 2.find odd number
function isOdd(number) {
  if (number % 2 === 0) {
    return false;
  } else {
    return true;
  }
}
console.log(isOdd(13));
console.log(isOdd(14));



// 3.finding the smallest number from the array.
function findMin(mya) {
  return Math.min.apply(null, mya);
}
let ar = [3, 6, 7, 8, 1, 9, 17, 10, 2];
console.log(findMin(ar));


// 4. showing a new array containing only the even numbers.
function filterEvenNumbers(inputNumber) {
  return inputNumber.filter(number => number % 2 === 0);
}
let inpNum = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(filterEvenNumbers(inpNum));


// 5. creating a new array sorted in descending order.
function sortArrayDescending(inputArray) {
  return inputArray.sort((a, b) => b - a);
}
let arr = [50, 21, 82, 33, 14, 9];
console.log(sortArrayDescending(arr));


// 6. showing returns the same string with the first letter lowercased.
function lowercaseFirstLetter(input) {
  return input.charAt(0).toLowerCase() + input.slice(1);
}
let str = 'Hello World!';
console.log(lowercaseFirstLetter(str));


// 7. showing returns the average of all elements.
function findAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}
const nums = [5, 26, 33, 49, 52];
console.log(findAverage(nums));


//8. showing returns true if the year is a leap year, and false if it is not.
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(2024));
console.log(isLeapYear(2023));
