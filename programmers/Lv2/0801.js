// number of 124 country: https://school.programmers.co.kr/learn/courses/30/lessons/12899 Complete

function solution(n) {
  const board = [4, 1, 2];
  let answer = "";

  while (n) {
    answer = board[n % 3] + answer;
    if (n % 3 === 0) n = n / 3 - 1;
    else n = Math.floor(n / 3);
  }
  return answer;
}
