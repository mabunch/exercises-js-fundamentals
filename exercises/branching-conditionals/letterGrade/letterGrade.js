/**
 * Given a numerical grade from 0 to 100, return a letter grade.
 *
 * The minus/plus cutoffs are at 2 and 6, respectively. For example,
 * 80-82 is a B-, 83-86 is a B, and 87-89 is a B+. Anything below 60 is an F.
 *
 * @example
 * letterGrade(50); // => 'F'
 * letterGrade(70); // => 'C-'
 * letterGrade(89); // => 'B+'
 *
 * @param {number} percentGrade - A number between 0 and 100 (inclusive), representing
 *  a student's percentage grade.
 * @return {string} The corresponding letter grade for the given percentage grade
 */
function letterGrade(percentGrade) {
  // This is your job. :)
  grade = '';
  if (percentGrade <= 60){
    return 'F';
  }

  if (percentGrade > 89){ // A
    grade += 'A';
  }
  else if(percentGrade > 79){ // B
    grade += 'B';
  }
  else if (percentGrade > 69){ // C
    grade += 'C';
  } 
  else if (percentGrade > 60){ // D
    grade += 'D';
  }

  if (percentGrade % 10 >= 7 || percentGrade == 100){ // +
    grade += '+';
  }
  if (percentGrade % 10 <= 2 && percentGrade != 100){ // -
    grade += '-';
  }

  return grade;
}

if (require.main === module) {
  console.log('Running sanity checks for letterGrade:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(letterGrade(50) == 'F'); // => 'F'
  console.log(letterGrade(100) == 'A+'); // 
  console.log(letterGrade(70) == 'C-'); // => 'C-'
  console.log(letterGrade(89) == 'B+'); // => 'B+'
  console.log(letterGrade(93) == 'A'); // => 'A'
}

module.exports = letterGrade;
