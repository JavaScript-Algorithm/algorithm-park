//Camouflage https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  const closet = {};

  for (const [name, type] of clothes) {
    if (!closet[type]) closet[type] = 1;
    closet[type]++;
  }

  return Object.values(closet).reduce((a, b) => a * b, 1) - 1;
}
