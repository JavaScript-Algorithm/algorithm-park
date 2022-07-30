// StrCompression: https://school.programmers.co.kr/learn/courses/30/lessons/60057 Complete

function solution(s) {
  let minLength = s.length;

  for (let phase = 1; phase <= s.length / 2; phase++) {
    let tempStr = s;
    let pivot = tempStr.slice(0, phase);
    let pivotCnt = 1;
    let result = "";
    let i = phase;
    for (; i <= s.length; i = i + phase) {
      if (pivot === tempStr.slice(i, i + phase)) {
        pivotCnt++;
      } else {
        result += pivotCnt === 1 ? "" + pivot : pivotCnt + pivot;
        pivot = tempStr.slice(i, i + phase);
        pivotCnt = 1;
      }
      if (i + phase > s.length) {
        result += tempStr.slice(i, s.length);
      }
    }
    if (result.length < minLength) minLength = result.length;
  }

  return minLength;
}
