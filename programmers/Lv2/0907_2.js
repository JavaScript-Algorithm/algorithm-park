//HowToLineUp https://school.programmers.co.kr/learn/courses/30/lessons/12936 Fail

function solution(fees, records) {
  const [basicTime, basicCost, time, cost] = fees;
  const feeRecord = {};

  for (let record of records) {
    const [time, car, type] = record.split(" ");
    if (feeRecord[car] === undefined) {
      feeRecord[car] = [time];
    } else {
      feeRecord[car].push(time);
    }
  }
  const test = Object.entries(feeRecord).map(([key, value]) => {
    let inTime = 0;
    for (let i = 0; i < value.length; i = i + 2) {
      if (value[i + 1] !== undefined) {
        inTime += calcTime(value[i], value[i + 1]);
      } else {
        inTime += calcTime(value[i], "23:59");
      }
    }
    const result =
      inTime <= basicTime
        ? basicCost
        : basicCost + Math.ceil((inTime - basicTime) / time) * cost;
    return [key, result];
  });
  console.log();

  return test.sort((a, b) => a[0] - b[0]).map((x) => x[1]);
}
function calcTime(startTime, endTime) {
  const [sH, sM] = startTime.split(":");
  const [eH, eM] = endTime.split(":");
  return parseInt(eH) * 60 + parseInt(eM) - (parseInt(sH) * 60 + parseInt(sM));
}
