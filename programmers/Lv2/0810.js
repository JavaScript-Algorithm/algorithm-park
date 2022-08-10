function solution(expression) {
  const numbers = expression.split(/[*\-+]/g).map((x) => parseInt(x));
  const plMaDu = expression.split(/[0-9]/g).filter((x) => x !== "");

  setRule([], ["*", "+", "-"], [0, 0, 0]);

  function setRule(rule, calc, visited) {
    if (rule.length === 3) {
      mathExecute(rule);
      return;
    }
    for (let i = 0; i < 3; i++)
      if (!visited[i]) {
        visited[i] = 1;
        rule.push(calc[i]);
        setRule(rule, calc, visited);
        visited[i] = 0;
        rule.pop();
      }
    return;
  }
  function calculator(operator, num1, num2) {
    switch (operator) {
      case "*":
        return num1 * num2;
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
    }
  }

  function mathExecute(rule) {
    const num = [...numbers];
    const op = [...plMaDu];
    //   console.log(num, op);

    for (let x of rule) {
      const idx = op.indexOf(x);
      // while (op.indexOf(x)) {
      //   const idx = op.indexOf(x);
      //   console.log(idx)
      //   op.splice(idx, 1);
      //   num.splice(idx, 1, num[idx], calculator(x, num[idx], num[idx + 1]));
      // }
    }
    console.log(num);
  }
  return [];
}
