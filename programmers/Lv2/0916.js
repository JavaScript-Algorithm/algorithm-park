//fatigueLevel https://school.programmers.co.kr/learn/courses/30/lessons/87946 Complete

function solution(k, dungeons) {
  let answer = -1;
  const visit = Array.from({ length: dungeons.length }, () => false);
  function dfs(fatigue, dep) {
    if (answer < dep) {
      answer = dep;
    }
    for (let i = 0; i < dungeons.length; i++) {
      if (!visit[i] && dungeons[i][0] <= fatigue) {
        visit[i] = true;
        dfs(fatigue - dungeons[i][1], dep + 1);
        visit[i] = false;
      }
    }
  }

  dfs(k, 0, 0);

  return answer;
}
