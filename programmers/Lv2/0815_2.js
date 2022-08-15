//searchRank https://school.programmers.co.kr/learn/courses/30/lessons/72412 Fail

function solution(info, query) {
  const answer = [];

  const lang = { cpp: 1, java: 2, python: 3 };
  const part = { backend: 1, frontend: 2 };
  const exp = { junior: 1, senior: 2 };
  const food = { chicken: 1, pizza: 2 };

  const infoBox = info.map((info) => info.split(" ").map(changeBox));

  function changeBox(arr, index) {
    switch (index) {
      case 0:
        return lang[arr];
      case 1:
        return part[arr];
      case 2:
        return exp[arr];
      case 3:
        return food[arr];
      case 4:
        return Number(arr);
      default:
        return 0;
    }
  }

  for (let queries of query) {
    let customInfo = [...infoBox];
    const queryBox = queries
      .split(" ")
      .filter((q) => q !== "and")
      .map(changeBox);
    // lang part exp food score

    for (let i = 0; i < queryBox.length; i++) {
      if (!queryBox[i]) continue;
      customInfo = customInfo.sort((a, b) => a[i] - b[i]);

      function doubleSearch(target) {
        let low = 0;
        let high = customInfo.length - 1;
        let mid;

        while (low < high) {
          mid = low + Math.floor((high - low) / 2);
          if (target <= customInfo[mid][i]) {
            high = mid;
          } else {
            low = mid + 1;
          }
        }
        return low;
      }

      let point = doubleSearch(queryBox[i]);
      const temp = [];
      while (point < customInfo.length) {
        if (i !== 4 && customInfo[point][i] !== queryBox[i]) break;
        temp.push(customInfo[point++]);
      }
      customInfo = temp;
    }

    answer.push(customInfo.length);
  }

  return answer;
}

// 이분탐색 lower bound
// 해쉬
