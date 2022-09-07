//ParkingFee https://school.programmers.co.kr/learn/courses/30/lessons/92341 Complete

function solution(n, k) {
  const result = [];
  const number = [1];
  for (let i = 2; i <= n; i++) number.push(i);
  k--;
  let i = 0;
  while (i++ < 3) {
    let c = Math.floor(k / factorial(n - 1));
    console.log(k, c);
    result.push(number.splice(c, 1));

    k = k % factorial(n - 1);
    n--;
  }
  console.log(result);
  return [];
}
const factorial = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i++) result *= num;
  return result;
};
