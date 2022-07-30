//OpenChattingRoom: https://school.programmers.co.kr/learn/courses/30/lessons/42888 Complete

function solution(record) {
  const userTable = {}; // data : {id, nick};
  const answer = []; //data : {id , act}

  const filteredRecord = record.map((rec) => rec.split(" "));

  filteredRecord.forEach((e) => {
    if (e[0] === "Enter") enterUser(e[1], e[2]);
    if (e[0] === "Leave") leaveUser(e[1]);
    if (e[0] === "Change") changeUser(e[1], e[2]);
  });

  function enterUser(id, nick) {
    changeUser(id, nick);
    answer.push({ id, act: "님이 들어왔습니다." });
  }

  function leaveUser(id) {
    answer.push({ id, act: "님이 나갔습니다." });
  }
  function changeUser(id, nick) {
    userTable[id] = nick;
  }
  return answer.map((data) => `${userTable[data.id]}${data.act}`);
}
