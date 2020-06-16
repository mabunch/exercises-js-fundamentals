/**
 * Given an input string, a target character to find, and a replacement character,
 * returns a copy of the input string with the target character replaced by the
 * replacement character.
 *
 * @example
 * replaceCharacter('hello', 'l', '8'); // => 'he88o'
 *
 * @param {string} string - The string to replace a character in
 * @param {string} target - The target letter
 * @param {string} replaceWith - The replacement letter
 * @returns {string} A copy of the input string with target replaced by replaceWith
 */

function replaceCharacter(string, target, replaceWith) {
  // This is your job. :)
  var i;
  var new_string = '';
  for (i=0; i<string.length; i++){
    if (string.charAt(i) == target){
      new_string += replaceWith;
    }
    else{
      new_string += string.charAt(i);
    }
  }
  return new_string;
}

if (require.main === module) {
  console.log('Running sanity checks for replaceCharacter:');

  console.log(replaceCharacter('hello', 'l', '8')); // => 'he88o')
  console.log(replaceCharacter('environment', 'e', '3'));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = replaceCharacter;
