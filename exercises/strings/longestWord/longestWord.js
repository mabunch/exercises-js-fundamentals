/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

function longestWord(string) {
  // This is your job. :)
  var i;
  var word = '';
  var mark = 0;
  var found = false;
  for (i=0; i<string.length; i++){
    if (string.charAt(i) == ' '){
      found = true;
      if ( (i-mark) > word.length) {
        word = string.slice(mark,i);
      }
      mark = i+1;
    }
  }

  if (found == false){
    word = string;
  }

  // console.log(word);
  return word;

}

if (require.main === module) {
  console.log('Running sanity checks for longestWord:');

  console.log(longestWord('welcome to the party') === 'welcome');
  console.log(longestWord('welcome to the dangerous party') === 'dangerous');
  console.log(longestWord('zoo') === 'zoo'); // test case for when there are no spaces

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = longestWord;
