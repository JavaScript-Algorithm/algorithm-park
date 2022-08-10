//JustDistance https://school.programmers.co.kr/learn/courses/30/lessons/81302 Complete

function solution(places) {
  let answer = [];
  for (let pla of places) {
    answer.push(Check(pla) ? 1 : 0);

    function Check(place) {
      for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
          if (place[x][y] === "O") {
            let cnt = 0;
            if (x > 0 && place[x - 1][y] === "P") cnt++;
            if (y > 0 && place[x][y - 1] === "P") cnt++;
            if (x < 4 && place[x + 1][y] === "P") cnt++;
            if (y < 4 && place[x][y + 1] === "P") cnt++;

            if (cnt >= 2) return false;
          }
          if (place[x][y] === "P") {
            if (x > 0 && place[x - 1][y] === "P") return false;
            if (y > 0 && place[x][y - 1] === "P") return false;
            if (x < 4 && place[x + 1][y] === "P") return false;
            if (y < 4 && place[x][y + 1] === "P") return false;
          }
        }
      }
      return true;
    }
  }
  return answer;
}
