//menu renewal https://school.programmers.co.kr/learn/courses/30/lessons/72411 Complete
function solution(orders, course) {
  var answer = [];
  for (let num of course) {
    let board = {};

    let filteredOrders = orders.filter((order) => order.length >= num);

    for (let combo of filteredOrders) {
      let str = combo.split("").sort();
      combine(-1, 0, "");
      function combine(s, depth, sum) {
        if (depth >= num) {
          if (board[sum]) board[sum]++;
          else board[sum] = 1;
          return;
        }
        for (let v = s + 1; v <= str.length; v++) {
          if (str[v]) combine(v, depth + 1, sum + str[v]);
        }
      }
    }
    let node = 2;
    const end = Object.entries(board).reduce((total, cur) => {
      if (node === cur[1]) {
        total.push(cur[0]);
      } else if (node < cur[1]) {
        node = cur[1];
        return [cur[0]];
      }
      return total;
    }, []);
    answer.push(end);
  }

  return answer.flatMap((x) => x).sort();
}
