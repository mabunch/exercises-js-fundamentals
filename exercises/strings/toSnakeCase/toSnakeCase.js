/**
 * Given an input string, returns a copy of the string in snake case.
 *
 * In snake case, every letter is lowercase and spaces are replaced
 * with underscores.
 *
 * See https://en.wikipedia.org/wiki/Snake_case
 *
 * @example
 * toSnakeCase('HeLlo fRIENds'); // => 'hello_friends'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A snake-case copy of the input string
 */

function toSnakeCase(string) {
  // This is your job. :)
  var i;
  var new_string = '';
  for (i=0; i<string.length; i++){
    if (string.charAt(i) == ' '){
      new_string += "_";
    }
    else{
      new_string += string.charAt(i).toLowerCase();
    }
  } 
  return new_string;
}

if (require.main === module) {
  console.log('Running sanity checks for toSnakeCase:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(toSnakeCase('HeLlo fRIENds')); // => 'hello_friends')
  console.log(toSnakeCase('weLcome to New yorK'));
}

module.exports = toSnakeCase;
