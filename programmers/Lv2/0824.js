//lifeBoat https://school.programmers.co.kr/learn/courses/30/lessons/42885 Complete

function solution(people, limit) {
  let answer = 0;
  const fit = people.sort((a, b) => b - a);
  let xl = 0,
    xr = people.length - 1;
  while (xl <= xr) {
    if (fit[xl++] + fit[xr--] > limit) xr++;
    answer++;
  }
  return answer;
}
