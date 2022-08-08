//Parentheses conversion https://school.programmers.co.kr/learn/courses/30/lessons/60058 Complete
function solution(p) {
  if (!p) return "";

  return conversion(p);
  function conversion(w) {
    if (!w) return "";
    const p = check(w);
    const u = w.slice(0, p);
    const v = w.slice(p);
    if (valid(u)) return u + conversion(v);
    else {
      const temp =
        u.length > 2
          ? u
              .split("")
              .map((c, i) => {
                if (i === 0 || i === u.length - 1) return;
                if (c === ")") return "(";
                else return ")";
              })
              .join("")
          : "";

      let result = `(${conversion(v)})${temp}`;
      return result;
    }
  }

  function check(str) {
    let isOpen = 0;
    let isClose = 0;
    let index = 0;
    for (let c of str.split("")) {
      if (c === "(") isOpen++;
      else if (c === ")") isClose++;
      index++;
      if (isOpen === isClose) return index;
    }
  }
  function valid(str) {
    let isOpen = 0;
    let isClose = 0;
    for (let c of str.split("")) {
      if (c === "(") isOpen++;
      else if (c === ")") isClose--;
      if (isOpen + isClose < 0) return false;
    }
    return true;
  }
}

// 군형잡힌 괄호 문자열: (, ) 갯수 동일
// 올바른 괄호 문자열: 짝이 맞다면
