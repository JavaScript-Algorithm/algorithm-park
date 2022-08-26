//cache https://school.programmers.co.kr/learn/courses/30/lessons/17680 Complete

function solution(cacheSize, cities) {
  let answer = 0;
  const cache = new Array(0);
  for (const city of cities) insert(city.toUpperCase());
  function insert(data) {
    if (cacheSize > 0 && cache.includes(data)) {
      cache.splice(cache.indexOf(data), 1);
      cache.unshift(data);
      answer++;
      return;
    }
    if (cache.length >= cacheSize) cache.pop();
    cache.unshift(data);
    answer += 5;
  }
  return answer;
}
