//matrixMultiplication https://school.programmers.co.kr/learn/courses/30/lessons/12949 Complete

function solution(arr1, arr2) {
  var answer = [];
  for (const record of arr1) {
    answer.push(getCalcArr(record, arr2));
  }
  function getCalcArr(record, arr2) {
    const temp = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let mock = 0;
      for (let i = 0; i < record.length; i++) {
        mock += record[i] * arr2[i][j];
      }
      temp.push(mock);
    }
    return temp;
  }
  return answer;
}
