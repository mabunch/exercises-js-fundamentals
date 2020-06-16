/**
 * Given an input string, returns the shortest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The shortest word in the input string
 */

function shortestWord(string) {
  // This is your job. :)
  var i;
  var word = string;
  var mark = 0;
  var found = false;
  for (i=0; i<string.length; i++){
    if (string.charAt(i) == ' '){
      found = true;
      if ( (i-mark) < word.length) {
        word = string.slice(mark,i);
      }
      mark = i+1;
    }
  }
  // console.log(word);
  return word;
}

if (require.main === module) {
  console.log('Running sanity checks for shortestWord:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(shortestWord('welcome to the party') === 'to');
  console.log(shortestWord('i am so happy') === 'i');
  console.log(shortestWord('zoo') === 'zoo'); // test case for when there are no spaces
}

module.exports = shortestWord;
