//divideElecNet https://school.programmers.co.kr/learn/courses/30/lessons/86971 다시풀자 ...

function solution(n, wires) {
  let answer = Number.MAX_SAFE_INTEGER;
  let parent = Array(n + 1);

  function findParent(x) {
    if (x === parent[x]) return x;
    return findParent(parent[x]);
  }

  function unionParent(a, b) {
    a = findParent(a);
    b = findParent(b);

    if (a < b) parent[b] = a;
    else parent[a] = b;
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = 1; j <= n; j++) {
      parent[j] = j;
    }

    for (let j = 0; j < n - 1; j++) {
      if (i === j) continue;
      unionParent(wires[j][0], wires[j][1]);
    }

    const map = new Map();
    for (let j = 1; j <= n; j++) {
      let p = findParent(j);
      map.set(p, (map.get(p) || 0) + 1);
    }

    let op = true;
    let temp = 0;
    for (const [key, value] of hs) {
      temp += op ? value : -value;
      op = false;
    }
    answer = Math.min(answer, Math.abs(temp));
  }

  return answer;
}
