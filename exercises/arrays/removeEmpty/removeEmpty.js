/**
 * Given an array of strings, return a new array with all the elements
 * of the original array except null, undefined, and the empty string ''.
 *
 * @example
 * removeEmpty([null, '', '']); // => []
 * removeEmpty(['Jesse', undefined, 'Farmer']); // => ['Jesse', 'Farmer']
 * removeEmpty(['one', '', 'two', '', 'three']); // => ['one', 'two', 'three']
 *
 * @param {string[]} array - An array of strings
 * @returns {string[]} A new array consisting of all the non-empty values in the
 *   input array.
 */
function removeEmpty(array) {
  // This is your job. :)
  let finalArray = [];
  for (let element in array){
    let item = array[element];
    if (item != '' && item != null && item != undefined){
      finalArray.push(array[element]);
    }
  }
  return finalArray;
}

if (require.main === module) {
  console.log('Running sanity checks for removeEmpty:');

console.log(removeEmpty([null, '', ''])); // => []
console.log(removeEmpty(['Jesse', undefined, 'Farmer'])); // => ['Jesse', 'Farmer']
console.log(removeEmpty(['one', '', 'two', '', 'three'])); // => ['one', 'two', 'three']
}

module.exports = removeEmpty;
