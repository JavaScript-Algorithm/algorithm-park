//repeatTranslateBinary https://school.programmers.co.kr/learn/courses/30/lessons/70129 Complete

function solution(s) {
  let answer = [0, 0];

  while (s.length > 1) {
    const t = s.split("").filter((x) => x === "1");
    answer[0]++;
    answer[1] += s.length - t.length;
    s = t.length.toString(2);
  }
  return answer;
}
