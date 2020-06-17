/**
 * Given an array of numbers, returns true if _every_ element is positive
 * and false otherwise.
 *
 * @example
 * allPositive([1, 2, 3, 4, 5]); // => true
 * allPositive([1, 2, -3, 4, 5]); // => false
 * allPositive([0, 0, 1]); // => false
 *
 * @param {number[]} array - An array of numbers
 * @returns {boolean} True if every number in the input array is positive
 *   and false otherwise.
 */
function allPositive(array) {
  // This is your job. :)
  for (let element of array){
    if (element <= 0){
      return false;
    }
  }
  return true;

}

if (require.main === module) {
  console.log('Running sanity checks for allPositive:');
  console.log(allPositive([1, 2, 3, 4, 5]) == true); // true
  console.log(allPositive([1, 2, -3, 4, 5]) == false); // false
  console.log(allPositive([0, 0, 1]) == false); // false
}

module.exports = allPositive;
