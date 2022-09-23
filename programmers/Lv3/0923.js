//NumberGame https://school.programmers.co.kr/learn/courses/30/lessons/12987 Complete
function solution(A, B) {
  let board = A.sort((a, b) => b - a);
  let winCard = B.sort((a, b) => b - a);
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[i] < winCard[count]) {
      count++;
    }
  }
  return count;
}
