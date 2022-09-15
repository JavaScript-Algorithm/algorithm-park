//makeEqualToQueue https://school.programmers.co.kr/learn/courses/30/lessons/118667 Complete

function solution(queue1, queue2) {
  const sum = (a, b) => a + b;
  const goalValue = Math.floor(
    (queue1.reduce(sum, 0) + queue2.reduce(sum, 0)) / 2
  );
  let value = queue1.reduce(sum, 0);
  let answer = 0;
  const mockQueue1 = [...queue1, ...queue2];
  const mockQueue2 = [...queue2, ...queue1];
  let mock1 = 0,
    mock2 = 0;
  while (value !== goalValue) {
    if (value < goalValue) {
      value += mockQueue2[mock2++];
      answer++;
    } else if (value > goalValue) {
      value -= mockQueue1[mock1++];
      answer++;
    } else break;
  }
  return value !== goalValue ? -1 : answer;
}
