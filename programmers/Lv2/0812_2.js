//SearchPrimeNumber https://school.programmers.co.kr/learn/courses/30/lessons/42839 Complete

function solution(numbers) {
  const board = [];
  search(0, "", []);
  return board.filter(primeNumber).length;

  function search(depth, sum, visited) {
    if (visited === numbers.length) return;
    for (let i = 0; i < numbers.length; i++)
      if (!visited.includes(i)) {
        visited.push(i);
        const text = sum + numbers[i];
        if (!board.includes(parseInt(text))) board.push(parseInt(text));
        search(depth + 1, text, visited);
        visited.pop();
      }
  }

  function primeNumber(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}
