/**
 * Given the the length of three triangle sides, returns the triangle's type as a string, i.e.,
 * `'acute'`, `'right'`, `'obtuse'`, or `'invalid'`.
 *
 * See https://www.murrieta.k12.ca.us/cms/lib5/CA01000508/Centricity/Domain/1830/T4.5.pdf
 *
 * If a triangle can't be formed from the three side lengths then return `'invalid'`.
 *
 * @example
 * triangleType(3, 4, 5); // => 'right'
 * triangleType(4, 3, 5); // => 'right' (the order of arguments shouldn't matter)
 * triangleType(1, 1, 1); // => 'acute'
 * triangleType(12, 15, 8); // => 'obtuse'
 * triangleType(1, 1, 3); // => 'invalid'
 *
 * @param {number} a Side length #1
 * @param {number} b Side length #2
 * @param {number} c Side length #3
 * @return {string} The type of triangle
 */
function triangleType(a,b,c) {
  // This is your job. :)
  if (a+b < c || a+c < b || b+c < a){
    return 'invalid';
  }

  if (a*a + b*b == c*c || a*a + c*c == b*b || c*c + b*b == a*a){
    return 'right';
  }

  let longestSide = Math.max(a,b,c);
  if ((longestSide == a && b*b + c*c < a*a) || (longestSide == b && a*a + c*c < b*b) || (longestSide == c && b*b + a*a < c*c)){
    return 'obtuse';
  }

  return 'acute';

}

if (require.main === module) {
  console.log('Running sanity checks for triangleType:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

console.log(triangleType(3, 4, 5)); // => 'right'
console.log(triangleType(4, 3, 5)); // => 'right' (the order of arguments shouldn't matter)
console.log(triangleType(1, 1, 1)); // => 'acute'
console.log(triangleType(12, 15, 8)); // => 'obtuse'
console.log(triangleType(1, 1, 3)); // => 'invalid'
}

module.exports = triangleType;
