//NQueen https://school.programmers.co.kr/learn/courses/30/lessons/12952 Fail

function solution(n) {
  var answer = 0;
  const columns = new Array(n);
  const arr = new Array(n);

  // i = x
  // q = y
  function check(i, cnt) {
    if (cnt === 0) return false;
    for (let q = cnt - 1; q >= 0; q--)
      if (arr[q] === i - (cnt - q) || arr[q] === i + (cnt - q)) return true;
    return false;
  }
  function dfs(cnt) {
    if (cnt === n) {
      console.log(arr);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (columns[i]) continue;
      if (check(i, cnt)) continue;
      arr[cnt] = i;
      columns[i] = true;
      dfs(cnt + 1);
      columns[i] = false;
    }
  }
  dfs(0);
  console.log(arr);
  return answer;
}
