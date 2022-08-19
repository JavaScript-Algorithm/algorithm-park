//truckPassingByBridge https://school.programmers.co.kr/learn/courses/30/lessons/42583 Complete

function solution(bridge_length, weight, truck_weights) {
  const truck = truck_weights.map((t) => [t, bridge_length - 1]);

  const bridge = [];
  const sum = (arr) => (arr.length ? arr.reduce((a, b) => a + b[0], 0) : 0);
  let tick = 0;
  while (truck.length || bridge.length) {
    tick++;
    for (let t = 0; t < bridge.length; t++)
      if (!bridge[t][1]--) {
        bridge.shift();
        t--;
      }

    if (truck.length) {
      const t = truck.shift();
      if (sum(bridge) + t[0] <= weight) bridge.push(t);
      else truck.unshift(t);
    }
  }

  return tick;
}
