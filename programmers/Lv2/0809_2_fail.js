//JustDistance https://school.programmers.co.kr/learn/courses/30/lessons/81302 fail

function solution(places) {
  let answer = [];
  for (let place of places) {
    let pos = [];

    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 5; y++) {
        if (place[x][y] === "P") pos.push({ x, y });
      }
    }
    check();

    function check() {
      for (let i = 0; i < pos.length; i++)
        for (let j = i; j < pos.length; j++) {
          if (i === j) continue;
          if (!valid(pos[i], pos[j])) {
            answer.push(0);
            return;
          }
        }
      answer.push(1);
    }

    function valid(pos1, pos2) {
      const dis = manhattanDis(pos1, pos2);
      if (dis >= 3) return true;
      if (dis === 1) return false;
      if (dis === 2) {
        if (pos1.x === pos2.x) {
          if (!place[pos1.x][Math.max(pos1.y, pos2.y) - 1] === "X")
            return false;
        } else if (pos1.y === pos2.y) {
          if (!place[Math.max(pos1.x, pos2.x) - 1][pos1.y] === "X")
            return false;
        } else {
          if (!(place[pos1.x][pos2.y] === "X" && place[pos2.x][pos1.y] === "X"))
            return false;
        }
      }
      return true;
    }
  }

  function manhattanDis(pos1, pos2) {
    // 거리 3 이내인경우 참
    return Math.abs(pos1.x - pos2.x) + Math.abs(pos1.y - pos2.y);
  }
  return answer;
}
