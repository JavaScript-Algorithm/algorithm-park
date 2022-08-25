//vowelDic https://school.programmers.co.kr/learn/courses/30/lessons/84512 Complete

function solution(word) {
  function dfs(t) {
    if (t.length > 5) return;

    answer[t] = cnt;
    cnt++;
    for (const c of "AEIOU") {
      dfs(t + c);
    }
  }

  const answer = {};
  let cnt = 0;
  dfs("");
  return answer[word];
}
