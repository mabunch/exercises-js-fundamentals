/**
 * Given an input string, returns a copy of the string in title case.
 *
 * For our purposes, title case is words separated by spaces with the
 * first letter of each word being capitalized and every other letter
 * being lowercsae.
 *
 * Don't do anything special with non-alphabetic characters (numbers,
 * puncuation, etc.). Don't worry about special rules like not capializing
 * definite articles (a, an, the, etc).
 *
 * @example
 * toTitleCase('wElCoMe to THE wILD wiLD WEST!'); // => 'Welcome To The Wild Wild West!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */

function toTitleCase(string) {
  // This is your job. :)
  var i = 0;
  var new_string = '';

  new_string += string.charAt(i).toUpperCase();
  for (i=1; i<string.length; i++){
    if (string.charAt(i-1) == ' '){
      new_string += string.charAt(i).toUpperCase();
    }
    else{
      new_string += string.charAt(i).toLowerCase();
    }
  }
  return new_string;
}

if (require.main === module) {
  console.log('Running sanity checks for toTitleCase:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(toTitleCase('wElCoMe to THE wILD wiLD WEST!')); // => 'Welcome To The Wild Wild West!')
  console.log(toTitleCase('.'));
  console.log(toTitleCase('DAVIDSON colLege'));
}

module.exports = toTitleCase;
