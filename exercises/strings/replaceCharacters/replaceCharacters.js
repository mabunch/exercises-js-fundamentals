/**
 * Given an input string and a character replacement dictionary, replaces every
 * character found as a key in the dictionary with the corresponding value.
 *
 * @example
 * replaceCharacters('hello', { 'h': 'y', 'l': '8' }); // => 'ye88o'
 *
 * @param {string} string - The string to replace a character in
 * @param {object} replacementDict - The replacement dictionary
 * @returns {string} A copy of the input string with the appropriate
 *   letters replaced according to replacementDict
 */

function replaceCharacters(string, replacementDict) {
  // This is your job. :)

  let old_string = string;
  for (var key in replacementDict){
    var new_string = '';
    for (i=0; i<old_string.length; i++){
      if (old_string.charAt(i) == key){
        new_string += replacementDict[key];
      }
      else{
        new_string += old_string.charAt(i);
      }
    }
    old_string = new_string;
  }
  return new_string;
}


if (require.main === module) {
  console.log('Running sanity checks for replaceCharacters:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(replaceCharacters('hello', { 'h': 'y', 'l': '8' })); // => 'ye88o')
  console.log(replaceCharacters('environment', { 'e': '3', 'o': '0' }));
}

module.exports = replaceCharacters;
