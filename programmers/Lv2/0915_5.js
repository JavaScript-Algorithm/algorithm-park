//correctParenthesis https://school.programmers.co.kr/learn/courses/30/lessons/12909 Complete

function solution(s) {
  let flag = 0;
  for (let c of s.split("")) {
    if (c === "(") flag++;
    else if (c === ")") flag--;
    if (flag < 0) return false;
  }
  return flag === 0 ? true : false;
}
