//leastN https://school.programmers.co.kr/learn/courses/30/lessons/12953 Complete

function solution(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) result = lcm(arr[i], result);

  return result;
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
