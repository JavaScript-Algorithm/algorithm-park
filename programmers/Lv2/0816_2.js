//rotateBrace https://school.programmers.co.kr/learn/courses/30/lessons/76502 Complete

function solution(s) {
  let answer = 0;
  const movement = s.length;
  const brace = s.split("");
  for (let i = 0; i < movement; i++) {
    if (CorrectBrace(brace)) answer++;
    const temp = brace.shift();
    brace.push(temp);
  }

  return answer;

  function CorrectBrace(arr) {
    const open = [];

    const openBrace = ["[", "(", "{"];
    const closeBrace = { "]": "[", ")": "(", "}": "{" };
    for (let c of arr) {
      if (openBrace.includes(c)) open.push(c);
      else {
        const temp = open.pop();
        if (temp !== closeBrace[c]) return false;
      }
    }
    if (open.length !== 0) return false;
    return true;
  }
}
