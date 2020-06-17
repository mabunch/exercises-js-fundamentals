/**
 * Given two arrays, returns a new array that is a concatenation of the
 * two given arrays.
 *
 * "Concatenation" means the two arrays are joined or glued together, end-to-end.
 *
 * JavaScript array's have a built-in concatenation method. Don't use it!
 * The goal is to better understand how concatenation works, not navigate
 * the JavaScript documentation.
 *
 * See https://en.wikipedia.org/wiki/Concatenation
 *
 * @example
 * concat([1, 2, 3], [4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
 * concat([-10, undefined], [true, 'waffles']); // => [-10, undefined, true, 'waffles']
 * concat([], []); // => []
 * concat([20, 104], []); // => [20, 104]
 * concat([], ['hello', 'world']); // => ['hello', 'world']
 *
 * @param {object[]} leftArray - The left array to concatenate
 * @param {object[]} rightArray - The right array to concatenate
 * @returns {object[]} The concatenation of the two given arrays
 */
function concat(leftArray, rightArray) {
  // This is your job. :)

  let newArray = [];
  for (let i=0; i<leftArray.length; i++){
    newArray.push(leftArray[i]);
  }
  for (let i=0; i<rightArray.length; i++){
    newArray.push(rightArray[i]);
  }
  return newArray;
  
}

if (require.main === module) {
  console.log('Running sanity checks for concat:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(concat([1, 2, 3], [4, 5, 6])); // => [1, 2, 3, 4, 5, 6])
  console.log(concat([-10, undefined], [true, 'waffles']));
}

module.exports = concat;
