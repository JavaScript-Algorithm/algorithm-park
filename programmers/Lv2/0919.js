function solution(maps) {
  var answer = 0;
  const dis = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const queue = [[0, 0, 1]];
  while (queue.length !== 0) {
    const [x, y, l] = queue.shift();
    if (x < 0 || x >= maps.length || y < 0 || y >= maps[0].length) continue;
    if (maps[x][y] === 0) continue;
    if (maps[x][y] === 1 || maps[x][y] > l) {
      maps[x][y] = l;
      for (const d of dis) {
        queue.push([x + d[0], y + d[1], l + 1]);
      }
    }
  }
  return maps[4][4] === 1 ? -1 : maps[4][4];
}
