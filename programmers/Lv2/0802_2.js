// target number: https://school.programmers.co.kr/learn/courses/30/lessons/43165 Complete

function solution(numbers, target) {
  var answer = 0;

  dfs(numbers, 0, 0);
  function dfs(number, d, sum) {
    if (d === numbers.length) {
      if (sum === target) answer++;
      return;
    }
    dfs(numbers, d + 1, sum + number[d]);
    dfs(numbers, d + 1, sum - number[d]);
  }

  return answer;
}
