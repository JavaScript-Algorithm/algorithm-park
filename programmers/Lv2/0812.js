//TheLargestNumber https://school.programmers.co.kr/learn/courses/30/lessons/42746 Complete

function solution(numbers) {
  const result = numbers
    .sort((a, b) => Number(b + "" + a) - Number(a + "" + b))
    .join("");

  return result[0] === "0" ? "0" : result;
}
