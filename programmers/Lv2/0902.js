//nNumberGame https://school.programmers.co.kr/learn/courses/30/lessons/17687 Complete

function solution(n, t, m, p) {
  let answer = "";

  let map = "";
  for (let i = 0; i < t * m; i++) map += parseCustom(i, n);
  for (let i = 0; answer.length < t; i++) if (i % m === p - 1) answer += map[i];

  return answer;
}
function parseCustom(num, type) {
  if (num === 0) return 0;
  let result = "";
  const n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  while (num > 0) {
    result = n[num % type] + result;
    num = Math.floor(num / type);
  }
  return result;
}
