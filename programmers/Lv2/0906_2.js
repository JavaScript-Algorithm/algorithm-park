//PresentationOfNumber https://school.programmers.co.kr/learn/courses/30/lessons/12924 Complete

function solution(n) {
  let answer = 1;
  for (let i = 1; i < n; i++) {
    let sum = i;
    for (let j = i + 1; j <= n; j++) {
      sum += j;
      if (sum === n) answer++;
      if (sum >= n) break;
    }
  }
  return answer;
}
