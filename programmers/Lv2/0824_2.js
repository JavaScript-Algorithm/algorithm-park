//StarMaker https://school.programmers.co.kr/learn/courses/30/lessons/87377 Complete

function solution(line) {
  let memo = [];
  let minX = Number.MAX_SAFE_INTEGER;
  let maxX = Number.MIN_SAFE_INTEGER;
  let minY = Number.MAX_SAFE_INTEGER;
  let maxY = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < line.length; i++) {
    for (let j = i + 1; j < line.length; j++) {
      if (line[i][0] * line[j][1] - line[i][1] * line[j][0] === 0) continue;
      const [A, B, E] = line[i];
      const [C, D, F] = line[j];
      const x = (B * F - E * D) / (A * D - B * C);
      const y = (E * C - A * F) / (A * D - B * C);
      if (x !== parseInt(x) || y !== parseInt(y)) continue;
      if (memo.indexOf([x, y]) === -1) maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      memo.push([x, y]);
    }
  }
  const answer = Array.from({ length: maxY - minY + 1 }, (_, __) =>
    new Array(maxX - minX + 1).fill(".")
  );
  for (const [x, y] of memo) answer[maxY - y][x - minX] = "*";
  return answer.map((v) => v.join(""));
}
