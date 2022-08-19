//Hindex https://school.programmers.co.kr/learn/courses/30/lessons/42747#fn1 Complete

function solution(citations) {
  const result = citations.sort((a, b) => b - a).filter((v, i) => v > i);
  return result[0] ? result.length : 0;
}
