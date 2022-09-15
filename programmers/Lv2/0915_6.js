//fibo https://school.programmers.co.kr/learn/courses/30/lessons/12945 Complete
function solution(n) {
  const memo = [0, 1, 1, 2];

  for (let i = 3; i <= n; i++) memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567;
  return memo[n];
}
