//newsClustering https://school.programmers.co.kr/learn/courses/30/lessons/17677 Complete
function solution(str1, str2) {
  const result = clustering(
    clear(str1.toUpperCase()),
    clear(str2.toUpperCase())
  );
  if (!result.n && !result.u) return 65536;

  return Math.floor((result.n / result.u) * 65536);

  function clustering(arr1, arr2) {
    const board = {};
    const frame = { a1: 0, a2: 0 };
    for (let a1 of arr1) {
      if (!board[a1]) board[a1] = { ...frame, a1: 1 };
      else board[a1] = { ...board[a1], a1: board[a1].a1 + 1 };
    }
    for (let a2 of arr2) {
      if (!board[a2]) board[a2] = { ...frame, a2: 1 };
      else board[a2] = { ...board[a2], a2: board[a2].a2 + 1 };
    }

    return Object.values(board).reduce(
      (total, board) => {
        const { a1, a2 } = board;
        total.n += Math.min(a1, a2);
        total.u += Math.max(a1, a2);

        return total;
      },
      { n: 0, u: 0 }
    );
  }

  function clear(str) {
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    const regExp1 = /[0-9]/g;
    const arr = str.split("").map((c, i) => {
      if (!str[i + 1] || c === " " || str[i + 1] === " ") return;
      if (c.match(regExp) || str[i + 1].match(regExp)) return;
      if (c.match(regExp1) || str[i + 1].match(regExp1)) return;

      return c + str[i + 1];
    });
    return arr.filter((data) => data !== undefined);
  }
}
