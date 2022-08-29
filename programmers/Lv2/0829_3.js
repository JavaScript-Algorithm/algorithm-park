//cutArray https://school.programmers.co.kr/learn/courses/30/lessons/87390 Complete

function solution(n, left, right) {
  const answer = [];
  for (let i = left; i <= right; i++) {
    answer.push(Math.max(parseInt(i / n), i % n) + 1);
  }
  return answer;
}
