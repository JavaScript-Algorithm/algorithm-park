function solution(n, wires) {
  var answer = -1;
  const map = Array.from(Array(n + 1), (_, i) => new Array());
  for (const wire of wires) map[wire[0]].push(wire[1]);

  console.log(map);
  return answer;
}
