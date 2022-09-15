//makeJadenCaseString https://school.programmers.co.kr/learn/courses/30/lessons/12951 Complete

function solution(s) {
  let answer = "";
  const word = s.split(" ");
  for (const w of word) {
    for (let c = 0; c < w.length; c++) {
      if (c === 0) {
        answer += w[c].toUpperCase();
      } else {
        if (w[c].match(/[1-9]/g)) continue;
        answer += w[c].toLowerCase();
      }
    }
    answer += " ";
  }
  return answer.slice(0, answer.length - 1);
}
