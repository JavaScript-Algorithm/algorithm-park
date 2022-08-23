//triangleSnail https://school.programmers.co.kr/learn/courses/30/lessons/68645 Complete

function solution(n) {
  const map = Array.from(Array(n), (_, index) => Array(index + 1));
  let currentNum = 0;
  let [row, col] = [-1, 0];
  let move = n;
  while (move > 0) {
    for (let i = 0; i < move; i++) map[++row][col] = ++currentNum;
    for (let i = 0; i < move - 1; i++) map[row][++col] = ++currentNum;
    for (let i = 0; i < move - 2; i++) map[--row][--col] = ++currentNum;
    move -= 3;
  }
  return map.flatMap((num) => num);
}
