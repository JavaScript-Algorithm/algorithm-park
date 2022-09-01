//compression https://school.programmers.co.kr/learn/courses/30/lessons/17684 Complete

function solution(msg) {
  const dic = {};
  let n = 1;
  let answer = [];
  let temp = "";
  for (const c of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") dic[c] = n++;
  for (const c of msg) {
    if (!dic[temp + c]) {
      dic[temp + c] = n++;
      answer.push(dic[temp]);
      temp = "";
    }
    temp += c;
  }
  answer.push(dic[temp]);
  return answer;
}
