//2xNTiling https://school.programmers.co.kr/learn/courses/30/lessons/12900#qna Complete

function solution(n) {
  const memo = [1, 1];

  for (let i = 0; i < n; i++) {
    memo.push((memo[i] + memo[i + 1]) % 1000000007);
  }
  console.log(memo);
  return memo[n];
}
