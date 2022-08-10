//tuple https://school.programmers.co.kr/learn/courses/30/lessons/64065 Complete

function solution(s) {
  const sets = s
    .substring(2, s.length - 2)
    .split("},{")
    .map((idx) => idx.split(","))
    .sort((a, b) => a.length - b.length);

  return sets
    .reduce((acc, set) => {
      const value = set.filter((v) => !acc.includes(v))[0];
      acc.push(value);
      return acc;
    }, [])
    .map((x) => Number(x));
}
