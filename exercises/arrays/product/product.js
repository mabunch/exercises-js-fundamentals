/**
 * Given an array of numbers, return their product.
 *
 * @example
 * product([2, 4, 6]); // => 48 (i.e., 2 * 4 * 6)
 * product([-10, 10]); // => -100 (i.e., -10 * 10)
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The product of the numbers in the array
 */
function product(array) {
  // This is your job. :)
  let product = array[0];
  for (let element in array){
    if (element != 0){
      product *= array[element];
    }
  }
  return product;
}

if (require.main === module) {
  console.log('Running sanity checks for product:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(product([2, 4, 6]) == 48);
  console.log(product([-10, 10]) == -100);
}

module.exports = product;
