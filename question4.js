// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

var x = 0;
var y = 100;
var z = 0;
var digits = [];
var palendromicNumbers = [];
var zAnswers = [];
var highValue = 0;

function palendromeNumber() {

var begin = Date.now();

  while (z <= 998001) {
    for ( var i = 100; i <= 999; i++ ) {
      x = i;
      z = x * y;
      var digits = (""+z).split("");

      if ( digits.length === 6 ) {
        if ( digits[0] === digits[digits.length -1] && digits[1] === digits[digits.length -2] && digits[2] === digits[digits.length -3]) {
          palendromicNumbers.push({ x:x, y:y, z:z });
          zAnswers.push(z);
        }
      }
    }
    y += 1;
  }
  highValue = Math.max.apply( Math, zAnswers );
  return highValue;
}
