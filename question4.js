// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.
/*

Notes:
xxx * yyy = palendromic number
999 * 999 = 998001 <- highest possible number.
Could we do a sort of reverse prime factor?

(apparent) Rules:

*/

// for ( var i = 0; i <= 998001; i++ ) {
//
// }
var x = 0;
var y = 100;
var z = 0;
var digits = [];
var palendromicNumbers = [];
console.time("loop");
while (z <= 998001) {
  for ( var i = 100; i <= 999; i++ ) {
    x = i;
    z = x * y;
    var digits = (""+z).split("");
    var middle = digits[Math.floor(digits.length / 2)];
    if ( digits.length === 6 && z % 2 === 0 ) {
      if ( digits[0] === digits[digits.length -1] && digits[1] === digits[digits.length -2] && digits[2] === digits[digits.length -3]) {
        palendromicNumbers.push({ x:x, y:y, z:z });
      }
    }
  }
  y += 1;
}
debugger;
Array.max = function( palendromicNumbers ){
    return Math.max.apply( Math, palendromicNumbers );
};
console.timeEnd("loop");
  // x = i;
  // y = i; // having will only do calculations like 111 * 111 need to have two loops.
  // z = x * y;
  // var digits = (""+z).split("");
  // var middle = digits[Math.floor(digits.length / 2)];
  //
  // if ( digits.length === 6 && z % 2 === 0 ) {
  //   // debugger;
  //   if ( digits[0] === digits[digits.length -1] && digits[1] === digits[digits.length -2] && digits[2] === digits[digits.length -3]) {
  //     console.log(z + "<- this should be palendromic");
  //     alert(x + "::" + y);
  //   } else {
  //     console.log(z + "<- not palendromic");
  //   }
  // } else {
  //   console.log(z + "<-- less than six digits");
  // }
// }
