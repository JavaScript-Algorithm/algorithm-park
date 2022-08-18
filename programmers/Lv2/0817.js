//delivery https://school.programmers.co.kr/learn/courses/30/lessons/12978 Fail

function solution(N, road, K) {
  const map = Array.from({ length: N + 1 }, (_, __) => ({
    route: [],
    cost: [],
    value: 500000,
  }));
  for (let i = 0; i < road.length; i++) {
    const [routeA, routeB, cost] = road[i];
    map[routeA].route.push(routeB);
    map[routeA].cost.push(cost);
    map[routeB].route.push(routeA);
    map[routeB].cost.push(cost);
  }

  djkra([], 1, 0);

  function djkra(visited, i, value) {
    if (value > K) return;
    visited.push(i);
    map[i].value = Math.min(map[i].value, value);
    for (let r = 0; r < map[i].route.length; r++) {
      if (!visited.includes(map[i].route[r])) {
        // console.log(visited, i);
        djkra(visited, map[i].route[r], map[i].cost[r] + map[i].value);
      }
    }
    visited.pop();
  }

  return map.filter((r) => r.value <= K).length;
}
