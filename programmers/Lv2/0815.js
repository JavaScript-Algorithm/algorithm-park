//expect Matching https://school.programmers.co.kr/learn/courses/30/lessons/12985 Complete

function solution(n, a, b) {
  let answer = 1;

  let max, min;
  if (a > b) {
    max = a;
    min = b;
  } else {
    max = b;
    min = a;
  }

  while (true) {
    max = max % 2 === 0 ? max : max + 1;
    min = min % 2 === 0 ? min : min + 1;
    if (max - min <= 1) break;
    max /= 2;
    min /= 2;
    answer++;
  }

  return answer;
}
