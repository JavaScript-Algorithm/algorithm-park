//findBiggerSquare https://school.programmers.co.kr/learn/courses/30/lessons/12905 Complete

function solution(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (
        board[row][col] >= 1 &&
        !(board[row - 1] === undefined || board[row][col - 1] === undefined)
      )
        board[row][col] =
          Math.min(
            board[row - 1][col],
            board[row - 1][col - 1],
            board[row][col - 1]
          ) + 1;
    }
  }
  return Math.max(...board.map((row) => Math.max(...row))) ** 2;
}
