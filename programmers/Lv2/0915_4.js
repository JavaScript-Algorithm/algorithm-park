//makeMinimumValue https://school.programmers.co.kr/learn/courses/30/lessons/12941 Complete

function solution(A, B) {
  const mock1 = A.sort((a, b) => a - b);
  const mock2 = B.sort((a, b) => b - a);
  return mock1.map((v, i) => v * mock2[i]).reduce((a, b) => a + b, 0);
}
