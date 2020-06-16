/**
 * Given two numbers representing two players' moves in a game of rock,
 * paper, scissors, return whether the first player's move was a win,
 * loss, or draw.
 *
 * To play, two people count off to three. On the count, each hold out their
 * hand in the shape of a rock, a piece of paper, or a pair of scissors. Scissors
 * beats paper, paper beats rock, and rock beats scissors. If both players play
 * the same item, it's a draw.
 *
 * See https://en.wikipedia.org/wiki/Rock_paper_scissors
 *
 * We will represent scissors with the number 0, paper with the number 1,
 * and rock with the number 2.
 *
 * @example
 * rockPaperScissorsWinner(0, 1); // => 'win' (scissors beats paper)
 * rockPaperScissorsWinner(1, 0); // => 'lose' (paper loses to scissors)
 * rockPaperScissorsWinner(1, 2); // => 'win' (paper beats rock)
 * rockPaperScissorsWinner(2, 2); // => 'draw' (both players played rock)
 *
 * @param {number} firstPlayerMove - The first player's move
 * @param {number} secondPlayerMove - The second player's move
 * @returns {string} Returns 'win', 'lose', or 'draw' depending on
 *  whether the first player won, lost, or drew the match.
 */
function rockPaperScissorsWinner(firstPlayerMove, secondPlayerMove) {
  // This is your job. :)
  if ((!Number.isInteger(firstPlayerMove) || (firstPlayerMove > 2 || firstPlayerMove < 0)) || (!Number.isInteger(secondPlayerMove) || (secondPlayerMove > 2 || secondPlayerMove < 0))){
    throw new Error(`Expected a firstPlayerMove and secondPlayerMove between 0 and 2, but received: ${firstPlayerMove} ${secondPlayerMove}`);
  }

  if (firstPlayerMove == secondPlayerMove){
    return 'draw';
  } 

  if (firstPlayerMove == 0){
    if (secondPlayerMove == 1){
      return 'win';
    }
    return 'lose';
  }

  if (firstPlayerMove == 1){
    if (secondPlayerMove == 2){
      return 'win';
    }
    return 'lose';
  }

  if (firstPlayerMove == 2){
    if (secondPlayerMove == 0){
      return 'win';
    }
    return 'lose';
  }
}

if (require.main === module) {
  console.log('Running sanity checks for rockPaperScissorsWinner:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(rockPaperScissorsWinner(0, 1)); // => 'win' (scissors beats paper)
  console.log(rockPaperScissorsWinner(1, 0)); // => 'lose' (paper loses to scissors)
  console.log(rockPaperScissorsWinner(1, 2)); // => 'win' (paper beats rock)
  console.log(rockPaperScissorsWinner(2, 2)); // => 'draw' (both players played rock)
  // console.log(rockPaperScissorsWinner(4, 7)); // => throw error
  // console.log(rockPaperScissorsWinner('rock', 2)); // => throw error
}

module.exports = rockPaperScissorsWinner;
