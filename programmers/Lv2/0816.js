//CandidateKey https://school.programmers.co.kr/learn/courses/30/lessons/42890 다시풀자...
function solution(relation) {
  const keys = [];
  const cols = Array.from({ length: relation[0].length }, (_, i) => i);

  const combineRel = (arr, level) => {
    if (level === 1) return arr.map((v) => [v]);
    const result = [];
    arr.forEach((fixed, index, origin) => {
      const restCombinations = combineRel(origin.slice(index + 1), level - 1);
      const attached = restCombinations.map((restCombination) => [
        fixed,
        ...restCombination,
      ]);
      result.push(...attached);
    });
    return result;
  };

  // 유일성
  const isUnique = (relation, comb) => {
    let result = Array.from({ length: relation.length }, (x) => "");
    for (const combIndex of comb)
      relation.forEach((row, rowIndex) => (result[rowIndex] += row[combIndex]));
    return result.length === [...new Set(result)].length;
  };

  //최소성

  const isMinimal = (comb) => {
    for (const key of keys)
      if (key.every((attr) => comb.includes(attr))) return false;
    return true;
  };

  for (let l = 1; l < cols.length; l++) {
    const allCases = combineRel(cols, l);
    for (const eachCase of allCases) {
      if (isMinimal(eachCase) && isUnique(relation, eachCase))
        keys.push(eachCase);
    }
  }

  console.log(keys);

  return [];
}
