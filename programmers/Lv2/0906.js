//NumberBlock https://school.programmers.co.kr/learn/courses/30/lessons/12923 Complete

function solution(begin, end) {
  const block = [];

  for (let i = begin; i <= end; i++) {
    block[i - begin] = minBlock(i);
  }
  return block;
}
function minBlock(blockNum) {
  if (blockNum === 1) return 0;
  for (let i = 2; i <= Math.sqrt(blockNum); i++)
    if (blockNum % i === 0 && blockNum / i <= 1e7) return blockNum / i;
  return 1;
}
