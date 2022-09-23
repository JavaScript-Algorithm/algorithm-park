//Network https://school.programmers.co.kr/learn/courses/30/lessons/43162 Complete

function solution(n, computers) {
  const visit = new Array(n).fill(false);
  let net = 0;
  while (true) {
    let num = clearVisit(visit);
    if (num === false) break;
    connectNet(num);
    net++;
  }
  return net;

  function connectNet(index) {
    visit[index] = true;
    for (let i = 0; i < n; i++) {
      if (visit[i]) continue;
      if (computers[index][i] === 1) connectNet(i);
    }
  }

  function clearVisit(visit) {
    for (let i = 0; i < n; i++) if (!visit[i]) return i;
    return false;
  }
}
