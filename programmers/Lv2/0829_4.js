//quadCompression https://school.programmers.co.kr/learn/courses/30/lessons/68936 Complete

function solution(arr) {
  var answer = [0, 0];

  function quadTree(n, y, x) {
    if (n === 1) return answer[arr[y][x]]++;

    function check() {
      let p = arr[y][x];
      for (let i = y; i < y + n; i++)
        for (let j = x; j < x + n; j++) if (arr[i][j] !== p) return false;
      return true;
    }
    if (check()) return answer[arr[y][x]]++;

    quadTree(n / 2, y, x); //2사분면
    quadTree(n / 2, y, x + n / 2); //1사분면
    quadTree(n / 2, y + n / 2, x); //3사분면
    quadTree(n / 2, y + n / 2, x + n / 2); //4사분면
  }
  quadTree(arr.length, 0, 0);
  return answer;
}
