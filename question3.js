//
//          projectEuler
//
// https://projecteuler.net/problem=2
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?
console.time("loop");
var number = 600851475143;        // initial number
var tempNumber = number;
var factoredNumber;               // temp number storage during factoring
number = number.toString();       // convert number to string
var numberArr = number.split(''); // split number into array of strings
var numIntArr = [];

// //isDivisBy...Flags
// var isDivisByTwo    = false;
// var isDivisByThree  = false;
// var isDivisByFour   = false;
// var isDivisByFive   = false;
// var isDivisBySix    = false;
// var isDivisByEight  = false;
// var isDivisByNine   = false;
// // Splits number into an array of integers
// for (i = 0; i < 12 ;i++) {
//   numIntArr.push((parseInt(numberArr[i])));
// }
// // Total of each digit in array
// var totalOfEachDigit = 0;
// for (var i = 0; i < numIntArr.length; i++) {
//   totalOfEachDigit = totalOfEachDigit + numIntArr[i];
// }
// // END BLOCK
//
// // rule of two
// if ( numIntArr[numIntArr.length-1] % 2 === 0 ) {
//   isDivisByTwo = true;
// }
// // END BLOCK
//
// // rule of three
// if ( totalOfEachDigit % 3 === 0 ) {
//   isDivisByThree = true;
// }
// //END BLOCK
//
// //rule of four
// var ruleOfFour = 0;
// ruleOfFour = numIntArr[numIntArr.length-1] + numIntArr[numIntArr.length-2];
// if (ruleOfFour % 4 === 0) {
//   isDivisByFour = true;
// }
// //END BLOCK
//
// // rule of 6
// if (isDivisByTwo === true && isDivisByThree === true) {
//   isDivisBySix = true;
// }
// //END BLOCK
//
// // rule of 8
// var ruleOfEight = 0;
// ruleOfEight = numIntArr[numIntArr.length-1] + numIntArr[numIntArr.length-2] + numIntArr[numIntArr.length-1];
// if ( ruleOfEight % 8 === 0 ) {
//   isDivisByEight = true;
// }
// // END BLOCK
//
// //rule of 9
// if (totalOfEachDigit % 9 === 0) {
//   isDivisByNine = true;
// }
// // END BLOCK


// calculation block
while (tempNumber > 0) {
  //isDivisBy...Flags
  var isDivisByTwo    = false;
  var isDivisByThree  = false;
  var isDivisByFour   = false;
  var isDivisByFive   = false;
  var isDivisBySix    = false;
  var isDivisByEight  = false;
  var isDivisByNine   = false;
  // Splits number into an array of integers
  for (i = 0; i < 12 ;i++) {
    numIntArr.push((parseInt(numberArr[i])));
  }
  // Total of each digit in array
  var totalOfEachDigit = 0;
  for (var i = 0; i < numIntArr.length; i++) {
    totalOfEachDigit = totalOfEachDigit + numIntArr[i];
  }
  // END BLOCK

  // rule of two
  if ( numIntArr[numIntArr.length-1] % 2 === 0 ) {
    isDivisByTwo = true;
  }
  // END BLOCK

  // rule of three
  if ( totalOfEachDigit % 3 === 0 ) {
    isDivisByThree = true;
  }
  //END BLOCK

  //rule of four
  var ruleOfFour = 0;
  ruleOfFour = numIntArr[numIntArr.length-1] + numIntArr[numIntArr.length-2];
  if (ruleOfFour % 4 === 0) {
    isDivisByFour = true;
  }
  //END BLOCK

  // rule of 6
  if (isDivisByTwo === true && isDivisByThree === true) {
    isDivisBySix = true;
  }
  //END BLOCK

  // rule of 8
  var ruleOfEight = 0;
  ruleOfEight = numIntArr[numIntArr.length-1] + numIntArr[numIntArr.length-2] + numIntArr[numIntArr.length-1];
  if ( ruleOfEight % 8 === 0 ) {
    isDivisByEight = true;
  }
  // END BLOCK

  //rule of 9
  if (totalOfEachDigit % 9 === 0) {
    isDivisByNine = true;
  }
  // END BLOCK




  if ( isDivisByTwo === true ) {                                                  //rule of 2
    factoredNumber = number / 2;
    tempNumber = tempNumber - factoredNumber;
  } else if ( isDivisByThree === true ) {                                         //rule of 3
    factoredNumber = number / 3;
    tempNumber = tempNumber - factoredNumber;
  } else if ( isDivisByFour === true ) {                                          //rule of 4
    factoredNumber = number / 4;
    tempNumber = tempNumber - factoredNumber;
  } else if ( isDivisByFive === true ) {                                          //rule of 5
    factoredNumber = number / 5;
    tempNumber = tempNumber - factoredNumber;
  } else if ( isDivisBySix === true) {                                            //rule of 6
    factoredNumber = number / 6;
    tempNumber = tempNumber - factoredNumber;
  } else if ( isDivisByEight === true ) {                                         //rule of 8
    factoredNumber = number / 8;
    tempNumber = tempNumber - factoredNumber;
  } else if ( isDivisByNine === true) {
    factoredNumber = number / 9;
    tempNumber = tempNumber - factoredNumber;
  }
}
console.timeEnd("loop");

// 1.	All numbers are divisible by 1
// √ 2.	A number ending with digits 0, 2, 4, 6, 8 is divisible by 2.
// √ 3.	If the sum of all digits in the given number is divisible by 3 then that number is divisible by 3.
// √ 4.	If the last two digits in the given number are divisible by 4 then that number is divisible by 4.
// √ 5.	The numbers ending with digits 0 or 5 are divisible by 5.
// √ 6	The number is divisible by 6 if the tests of divisibility of 2 & 3 are applicable to that number.
// 7.	There is no particular test of divisibility by number 7.
// √ 8.	If the last three digits in the given number are divisible by 8 then that number is divisible by 8.
// 9.	If the sum of all digits in the given number is divisible by 9 then that number is divisible by 9.
// 10.	A number ending with one 0 is divisible by 10
// A number ending with two 0 is divisible by 100
// A number ending with three 0 is divisible by 1000
// 11.	A given number is divisible by 11, if the difference between the sum of the digits at even places and the odd places is a number which is either 0 or divisible by 11.
// 12.	The number is divisible by 12 if the tests of divisibility of 3 & 4 are applicable to that number.
// 13.	Divisibility by 7, 11 & 13
// In the given number, form the groups of three digits from the right end. Add the groups at even places and groups at odd places saperately. Subtract the two additions. If the number obtained after subtraction is zero or divisible by 7, 11 & 13 then the given number is divisible by 7, 11 & 13.
//
// in case of 2564
// it is divisible by only 4
// 2564 = 4 × 641
// now to find factors of 641
// you have to find if 641 is prime number or not
// √651 is between 25 & 26
// find prime numbers up to 26
// 2, 3, 5, 7, 11, 13, 17, 19, 23
// divide 642 by each of these prime numbers
// it is not divisible so 641 is a prime number.
// (it the number is divisible by any of the prime number then the original number is not a prime)
// so 2564 = 2² × 641
