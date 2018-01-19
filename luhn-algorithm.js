// Pseudo code:
// function checkLuhn(string purportedCC) {
//     int sum := 0
//     int nDigits := length(purportedCC)
//     int parity := nDigits modulus 2
//     for i from 0 to nDigits - 1 {
//         int digit := integer([i])
//         if i modulus 2 = parity
//             digit := digit × 2
//         if digit > 9
//             digit := digit - 9
//         sum := sum + digit
//     }
//     return (sum modulus 10) = 0
//   }

const check = function(num) {
  var sum = 0;
  var nDigits = num.toString().length;
  var parity = nDigits % 2;

  for (i = 0; i < nDigits; i++) {
    var digit = i;
console.log("digit: ", digit);
console.log("parity: ", parity);
    if (i % 2 === parity) {
      digit = digit * 2;
console.log("digit: ", digit);
    }
    if (digit > 9) {
      digit += -9;
console.log("digit: ", digit);
    }
    sum += + digit;
  }
  return ((sum % 10) === 0);
}

console.log(check(79));

//module.exports = check;