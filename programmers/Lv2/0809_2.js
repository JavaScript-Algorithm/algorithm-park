function solution(places) {
  let answer = [];
  for (let pla of places) {
    answer.push(Check(pla) ? 1 : 0);

    function Check(place) {
      function node(n) {
        return n ? n : "";
      }
      for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
          if (node(place[x][y]) === "O") {
            let cnt = 0;
            if (node(place[x - 1][y]) === "P") cnt++;
            if (node(place[x][y - 1]) === "P") cnt++;
            if (node(place[x + 1][y]) === "P") cnt++;
            if (node(place[x][y + 1]) === "P") cnt++;

            if (cnt >= 2) return false;
          }
          if (node(place[x][y]) === "P") {
            if (node(place[x - 1][y]) === "P") return false;
            if (node(place[x][y - 1]) === "P") return false;
            if (node(place[x + 1][y]) === "P") return false;
            if (node(place[x][y + 1]) === "P") return false;
          }
        }
      }
      return true;
    }
  }
  return answer;
}
