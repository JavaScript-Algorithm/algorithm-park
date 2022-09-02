//EatDirt https://school.programmers.co.kr/learn/courses/30/lessons/12913 Complete
function solution(land) {
  for (let y = 1; y < land.length; y++)
    for (let x = 0; x < 4; x++)
      land[y][x] =
        land[y][x] +
        Math.max(...land[y - 1].slice(0, x), ...land[y - 1].slice(x + 1));

  return Math.max(...land[land.length - 1]);
}
