//visitLength https://school.programmers.co.kr/learn/courses/30/lessons/49994

const path = new Set();
function solution(dirs) {
  const pos = { x: 0, y: 0 };

  for (const dir of dirs) move(pos, dir);
  return path.size / 2;
}

const move = (pos, d) => {
  let prevPos = {
    x: pos.x,
    y: pos.y,
  };

  switch (d) {
    case "U":
      if (pos.y < 5) pos.y++;
      break;
    case "D":
      if (pos.y > -5) pos.y--;
      break;
    case "L":
      if (pos.x > -5) pos.x--;
      break;
    case "R":
      if (pos.x < 5) pos.x++;
      break;
  }

  if (pos.x === prevPos.x && pos.y === prevPos.y) {
    return pos;
  } else {
    //방향에 따른 중복검사
    path.add(
      prevPos.x.toString() +
        prevPos.y.toString() +
        pos.x.toString() +
        pos.y.toString()
    );
    path.add(
      pos.x.toString() +
        pos.y.toString() +
        prevPos.x.toString() +
        prevPos.y.toString()
    );
    return pos;
  }
};
