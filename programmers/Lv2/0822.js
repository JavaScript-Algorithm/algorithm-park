//Friends4Block https://school.programmers.co.kr/learn/courses/30/lessons/17679 Complete

function solution(m, n, board) {
  let answer = 0;

  // col 기준으로 배열 구성
  // 체크시 지워져야 하는 항목 체크
  // row = n;
  // col = m;
  const map = Array.from({ length: n }, (_, __) => new Array(m));

  // 맵 셋팅
  board.forEach((record, row) =>
    record.split("").forEach((v, col) => (map[col][row] = { v, s: false }))
  );
  while (check(map)) filter(map);
  //console.log(map.map(m => m.map(x => x.v)))
  function check(map) {
    let some = false;
    for (let x = 0; x < n - 1; x++)
      for (let y = 0; y < m - 1; y++) {
        const pivot = map[x][y].v;
        if (!pivot) continue;
        if (map[x + 1][y].v !== pivot) continue;
        if (map[x][y + 1].v !== pivot) continue;
        if (map[x + 1][y + 1].v !== pivot) continue;
        map[x][y].s = true;
        map[x + 1][y].s = true;
        map[x + 1][y + 1].s = true;
        map[x][y + 1].s = true;
        some = true;
      }
    return some;
  }
  function filter(map) {
    for (const row in map) {
      map[row] = map[row].filter((d) => !d.s);
      const empty = m - map[row].length;
      answer += empty;
      if (empty)
        for (let i = 0; i < empty; i++) map[row].unshift({ v: 0, s: false });
    }
  }

  return answer;
}
