//MaximumAndMinimum https://school.programmers.co.kr/learn/courses/30/lessons/12939 Complete
function solution(s) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  for (let c of s.split(" ")) {
    const num = parseInt(c);
    min = Math.min(min, num);
    max = Math.max(max, num);
  }
  return `${min} ${max}`;
}
