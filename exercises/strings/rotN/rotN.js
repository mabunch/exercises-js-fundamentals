/**
 * Given an input string and positive integer N, returns a ROT-N
 * copy of the string.
 *
 * ROT-N is just like ROT-13 except that we specify the number
 * instead of only using 13.
 *
 * Play with https://rot13.com/, you can change the N.
 *
 * @example
 * rotN('Hello, world!', 13); // => 'Uryyb, jbeyq!'
 * rotN('Hello, world!', 9); // => 'Qnuux, fxaum!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */

function rotN(string, n) {
  // This is your job. :)
  var i;
  var new_string = '';  
  for (i=0; i<string.length; i++){
    var char = string.charCodeAt(i);
    // lower case letter
    if ((char >= 97) && (char <= 122)){
      new_string += String.fromCharCode(((char - 96 + n) % 26) + 96);
    }
    // upper case
    else if ((char >= 65) && (char <= 90)){
      new_string += String.fromCharCode(((char - 64 + n) % 26) + 64);
    }
    // any other character
    else{
      new_string += string.charAt(i);
    }
  }
  return new_string;

}

if (require.main === module) {
  console.log('Running sanity checks for rotN:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(rotN('Hello, world!', 9)); // => 'Qnuux, fxaum!'
  console.log(rotN('Hello, world!', 13)); // => 'Uryyb, jbeyq!')

}

module.exports = rotN;
