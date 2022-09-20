function solution(maps) {
  const dis = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const row = maps.length - 1;
  const col = maps[0].length - 1;
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
  return maps[row][col] === 1 ? -1 : maps[row][col];
}
