// Functional development: https://school.programmers.co.kr/learn/courses/30/lessons/42586 Complete

function solution(progresses, speeds) {
  var answer = new Array(100);
  answer.fill(0);
  let MaxDays = 0;
  for (let i = 0; i < progresses.length; i++) {
    let base = 100 - progresses[i];
    let cnt = 0;
    while (base > 0) {
      base = base - speeds[i];
      cnt++;
    }
    if (MaxDays < cnt) MaxDays = cnt;
    answer[MaxDays]++;
  }
  return answer.filter((n) => n !== 0);
}
