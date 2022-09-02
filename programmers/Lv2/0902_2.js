//TheBiggerNumber https://school.programmers.co.kr/learn/courses/30/lessons/12911 Complete

function solution(n) {
  const p = n.toString(2).match(/1/g).length;
  for (let i = n + 1; ; i++)
    if (i.toString(2).match(/1/g).length === p) return i;
}
