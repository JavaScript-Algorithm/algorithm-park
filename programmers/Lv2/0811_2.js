//printer https://school.programmers.co.kr/learn/courses/30/lessons/42587 Complete

function solution(priorities, location) {
  let answer = 0;
  const board = priorities.map((priority, idx) => [priority, idx]);
  const arr = [];
  for (let i = 0; i < board.length; ) {
    const t = board.shift();
    if (board.some((x) => t[0] < x[0])) board.push(t);
    else {
      arr.push(t);
      if (arr[answer++][1] === location) break;
    }
  }

  return answer + 1;
}
