/**
 * Given an input string, returns a copy of the string with all-uppercase letters.
 *
 * Don't use JavaScript's built-in string.toUpperCase
 *
 * Only worry about characters in the ASCII range: http://www.asciitable.com/
 *
 * Do nothing to characters that have no corresponding uppercase character, e.g.,
 * don't do anything special for a space, a number, a dash, etc.
 *
 * @example
 * toUpperCase('HelLo fRiends!'); // => 'HELLO FRIENDS!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A uppercase copy of the input string
 */

function toUpperCase(string) {
  // This is your job. :)

  var i;
  let new_string = '';
  for (i=0; i<string.length; i++){
    new_string += string.charAt(i).toUpperCase();
  }
  return new_string;
}

if (require.main === module) {
  console.log('Running sanity checks for toUpperCase:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(toUpperCase('HelLo fRiends!')); // => 'HELLO FRIENDS!')
  console.log(toUpperCase('i am actually screaming'));
}

module.exports = toUpperCase;
