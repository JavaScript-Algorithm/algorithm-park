function solution(bridge_length, weight, truck_weights) {
  const truck = truck_weights.map((t) => [t, bridge_length - 1]);

  const bridge = [];
  const sum = (arr) => (arr.length ? arr.reduce((a, b) => a + b[0], 0) : 0);
  // arr.length ? arr.reduce((a, b) =>{ return a[0] + b[0]}, 0) : 0;
  let tick = 0;
  while (truck.length || bridge.length) {
    tick++;
    for (const t = 0; t < bridge.length; t++)
      if (!t[1]--) {
        bridge.shift();
        t--;
      }

    if (truck.length) {
      const t = truck.shift();
      if (sum(bridge) + t[0] <= weight) bridge.push(t);
      else truck.unshift(t);
    }
    console.log(bridge, tick, sum(bridge));
  }
  console.log(tick);

  return -1;
}
