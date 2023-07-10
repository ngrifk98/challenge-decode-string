/*In this challenge, you’ll write a decoder.

Write a js function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

The number in the string represents how many characters each letter should shift. For example:

>>> "1a" // "b"
>>> "3ce" // "fh"
>>> "2fcjjm" // "hello"
*/

// Write your code below this line

function decodeString(input) {
    let result = '';
    let shift = parseInt(input[0]);
  
    for (let i = 1; i < input.length; i++) {
      let charCode = input.charCodeAt(i);
      let decodedCharCode = (charCode - 97 + shift) % 26 + 97;
      result += String.fromCharCode(decodedCharCode);
    }
  
    return result;
  }

  console.log(decodeString("1a")); // Output: "b"
  console.log(decodeString("3ce")); // Output: "fh"
  console.log(decodeString("2fcjjm")); // Output: "hello"
  