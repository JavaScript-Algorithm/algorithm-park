//carpet https://school.programmers.co.kr/learn/courses/30/lessons/42842 Complete

function solution(brown, yellow) {
  let answer = [];
  for (let i = 1; i <= 5000; i++) {
    for (let j = 1; j <= i; j++) {
      if (2 * i + 2 * j - 4 == brown) {
        if (i * j - brown == yellow) {
          answer.push(i);
          answer.push(j);
          return answer;
        }
      }
    }
  }
  return answer;
}
