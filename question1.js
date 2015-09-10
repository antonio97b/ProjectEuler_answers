//
//          projectEuler
//
// https://projecteuler.net/problem=1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var total = 0;                          // set my total to zero
for (var i = 0; i < 1000; i++) {        // begin a for loop that will iterate 1000 times as per directions
  if (i % 3 === 0 | i % 5 === 0) {      // if i is divisible by 3 or 5...
  total = total + i;                    // we add it to the total
  };
};

// 233168
