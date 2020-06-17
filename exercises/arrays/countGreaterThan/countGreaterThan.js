/**
 * Given an array of numbers and a threshold number, return the count of
 * elements in the array strictly greater than the threshold number.
 *
 * "Strictly greater than" means we want numbers greater than (>) and not
 * greater than or equal to (>=).
 *
 * @example
 * countGreaterThan([1, 2, 3, 4, 5], 2); // => 3
 * countGreaterThan([1, 2, 3, 4, 5], 17); // => 0
 * countGreaterThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1); // => 5
 * countGreaterThan([10, 10, 10, -10, 15], 10); // => 1
 *
 * @param {number[]} array - An array of numbers
 * @param {number} threshold - The threshold for counting
 * @returns {number} The number of elements in the array greater than threshold
 */
function countGreaterThan(array, threshold) {
  // This is your job. :)
  let count = 0;
  for (let element in array){
    if (array[element] > threshold){
      count++;
    }
  }
  return count;
}

if (require.main === module) {
  console.log('Running sanity checks for countGreaterThan:');
  console.log(countGreaterThan([1, 2, 3, 4, 5], 2) == 3); // => 3
  console.log(countGreaterThan([1, 2, 3, 4, 5], 17) == 0); // => 0
  console.log(countGreaterThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1) == 5); // => 5
  console.log(countGreaterThan([10, 10, 10, -10, 15], 10) == 1); // => 1
  
}

module.exports = countGreaterThan;
