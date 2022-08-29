//3xTiling https://school.programmers.co.kr/learn/courses/30/lessons/12902 Complete
function solution(n) {
  if (n % 2) return 0;
  const memo = [1, 0, 3, 0, 11];
  for (let i = 4; i <= n; i = i + 2) {
    memo[i] =
      (((memo[i - 2] * 4) % 1000000007) -
        (memo[i - 4] % 1000000007) +
        1000000007) %
      1000000007;
  }

  return memo[n] % 1000000007;
}
// solution(2000)
