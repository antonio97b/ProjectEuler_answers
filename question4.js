// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

function palindromeNumber(digitRange) {
  var x = 0;
  var z = 0;
  var palindromeNumbers = [];
  var zAnswers = [];
  var highValue = 0;
  var base = [1];
  var ceiling = [9];

  for (var k = 0; k < digitRange-1; k++) {
    base.push(0);
    ceiling.push(9);
  }
  base = parseInt(base.join(""));
  ceiling = parseInt(ceiling.join(""));

  var y = base
  while (z < ceiling * ceiling) {
    for ( var i = base; i <= ceiling; i++ ) {
      z = i * y;

      var numStr = z.toString();
      var revNumStr = numStr.split("").reverse().join("");
      if ( numStr === revNumStr ) {
        palindromeNumbers.push({ x:x, y:base, z:z });
        zAnswers.push(z);
      }
    }
    y += 1;
  }
  highValue = Math.max.apply( Math, zAnswers );
  return highValue;
}
