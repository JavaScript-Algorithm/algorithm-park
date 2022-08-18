function solution(bridge_length, weight, truck_weights) {
  const wait_trucks = [...truck_weights].sort((a, b) => b - a);
  const wait_times = new Array(wait_trucks.length).fill(0);
  const bridge = { weight, trucks: [] };
  const get = () =>
    bridge.trucks.length === 0 ? 0 : bridge.trucks.reduce((a, b) => a + b, 0);
  let time = bridge_length;

  while (wait_trucks.length !== 0) {
    const truck = wait_trucks.shift();
    if (get() > truck) {
      bridge.trucks.push(truck);
    } else {
      bridge.trucks.pop();
      time++;
    }
  }
  console.log(time);
  return -1;
}
