//Jump https://school.programmers.co.kr/learn/courses/30/lessons/12980 Complete

function solution(n) {
  let ans = 1;
  while (n !== 1) {
    const p = n / 2;
    const ip = parseInt(n / 2);

    if (p === ip) {
      n = n / 2;
    } else {
      n--;
      ans++;
    }
  }

  return ans;
}
