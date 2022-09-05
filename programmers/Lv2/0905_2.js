//getPrimeNumberInK_Notation https://school.programmers.co.kr/learn/courses/30/lessons/92335 Complete

function solution(n, k) {
  let answer = 0;
  const nums = n.toString(k).split("0");
  for (const num of nums) {
    if (num !== "" && getPrime(Number(num))) answer++;
  }
  return answer;
}
function getPrime(m) {
  if (m === 1) return false;
  if (m < 3) return true;
  for (let i = 3; i <= Math.sqrt(m); i++) {
    if (m % i === 0) return false;
  }
  return true;
}
