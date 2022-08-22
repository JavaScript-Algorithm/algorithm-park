//differentBits https://school.programmers.co.kr/learn/courses/30/lessons/77885 Complete

function solution(numbers) {
  function bit(num) {
    const result = num.toString(2).split("");
    const zero = result.lastIndexOf("0");
    if (zero === -1) result.splice(1, 0, "0");
    else if (zero === result.length - 1) {
      result[zero] = "1";
    } else {
      result[zero] = "1";
      result[zero + 1] = "0";
    }

    return parseInt(result.join(""), 2);
  }
  return numbers.map(bit);
}
