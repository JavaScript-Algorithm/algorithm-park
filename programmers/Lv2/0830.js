//skillTree https://school.programmers.co.kr/learn/courses/30/lessons/49993 Complete

function solution(skill, skill_trees) {
  let answer = 0;

  for (const skill_tree of skill_trees)
    if (verifiedSkillSet(skill, skill_tree)) answer++;
  return answer;
}
function verifiedSkillSet(skill, skill_tree) {
  let s = 0;
  for (const c of skill_tree)
    if (skill.indexOf(c) > -1 && skill[s++] !== c) return false;
  return true;
}
