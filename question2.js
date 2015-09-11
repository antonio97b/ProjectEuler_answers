//
//          projectEuler
//
// https://projecteuler.net/problem=2
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

console.time("loop");             // Start timer
var x     = 1;                          // x is set at 1 to start our Fibonacci sequence (1,1,2,3....) and each loop of x is going to be the Fibonacci sequence itself (x = 1, x = 2, x = 3, x = 5...)
var y     = 1;                          // y is set to 1 for reason above
var z     = 0;                          // z is our temp total that is reset upon each loop
var total = 0;                          // This is where we store our total of even sequence numbers



for (var i = 0; i < 1000000; i++) {     // 1000000 is just an arbitrary number to make sure we loop enough.
  while (total < 4000000) {             // this loop wil break continue until our total variable reaches four million
    z = y + x;                          // adds our two sequence numbers. Again we start at one
    if (x % 2 === 0) {                  // if x is even...
      total = total + x;                // add x to the total
    }
    x = z;                              // sets x to be queal to z (our temp sum). so that x can be the term that can be added against y
    y = x - y;                          // y is the difference of our (newly defined..) x minus itself
    z = 0;                              // reset our temp sum to zero for next calculation
  };
};
console.timeEnd("loop");          // Return timer
//Answer: 4613732
//Execute Time: loop: 836.177ms

// Another way to solve this is knowing that every third digit is an even number. I inadvertently stumbled upon that pattern (did not see it myself)
// so i forced myself to find a way to check if it is even rather than go with the "add every third" pattern.

// Written out a brief Fibonacci sequence to find a pattern
x + y = z

    x + y = z
1 + 1 = 2   x + y = z
    1 + 2 = 3
        2 + 3 = 5   x +  y = z
            3 + 5 = 8
                5 + 8 = 13    x +  y = z
                    8 + 13 = 21
                        13 + 21 = 34
                             21 + 34 = 55
// post script notes:
// I realize I could have done with just the "while" loop. the other loop is redundant.
//    Though, I will keep this loop code as-is to show what was my first solution.
//    However, if I were to refactor it, I would omit the 'for' loop all together.
// If i were to reapproach this question I would take it one step at a time. I
//    attempeted this problem in one go (checking even entries etc.). I should
//    have just console.logged until I made the Fibonacci sequence work then added
//    the final total check at the end. It would have been easier to focus on one
//    thing.
