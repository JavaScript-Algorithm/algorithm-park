//RecentlyTheMusic https://school.programmers.co.kr/learn/courses/30/lessons/17683 Complete

function solution(m, musicinfos) {
  let answer = { lng: 0, title: "(None)" };
  m = rewriteMusic(m);

  for (const musicInfo of musicinfos) {
    let [start, end, title, music] = musicInfo.split(",");
    music = rewriteMusic(music);
    const time = text2time(start, end);
    const melody = music2melody(time, music);

    if (melody.includes(m) && answer.lng < time) {
      answer = { lng: time, title };
    }
  }

  return answer.title;
}

const rewriteMusic = (music) => {
  const code = music.split("");
  for (let i = code.length; i >= 0; i--) {
    if (code[i] === "#") {
      code[i] = "";
      code[i - 1] = code[i - 1].toLowerCase();
    }
  }
  return code.join("");
};

const text2time = (start, end) => {
  const [sh, sm] = start.split(":");
  const [eh, em] = end.split(":");
  return Number(eh) * 60 + Number(em) - (Number(sh) * 60 + Number(sm));
};
const music2melody = (time, music) =>
  music.repeat(Math.floor(time / music.length)) +
  music.substring(0, time % music.length);
