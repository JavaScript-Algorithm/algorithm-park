//sortFileName https://school.programmers.co.kr/learn/courses/30/lessons/17686 Complete

function solution(files) {
  files = files.map((file) => {
    const [HEAD, NUMBER] = divFileName(file);
    return { HEAD, NUMBER, file };
  });
  files = files.sort((a, b) => {
    if (a.HEAD === b.HEAD) return a.NUMBER - b.NUMBER;
    return a.HEAD < b.HEAD ? -1 : 1;
  });
  return files.map((o) => o.file);
}
const divFileName = (str) => [
  str.split(/[0-9]/g)[0].toUpperCase(),
  Number(str.split(/[^0-9]/g).filter((x) => x !== "")[0]),
];
