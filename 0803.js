// double delete https://school.programmers.co.kr/learn/courses/30/lessons/12973 Complete

function solution(s) {
  var answer = -1;
  let pan = [];
  pan.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    if (pan[pan.length - 1] === s[i]) {
      pan.pop();
    } else {
      pan.push(s[i]);
    }
  }

  answer = pan.length === 0 ? 1 : 0;
  return answer;
}

// function solution(s)
// {
//     let pan = s.split('');
//     if(pan.length % 2 === 1) return 0;
//     let memo = [];
//     while(memo.length === 0){
//         let flag = true;
//         memo = [];
//         for(let i = 0; i < pan.length; i++){
//             if(pan[i] === pan[i-1]){
//                 memo.pop();
//                 flag = false;
//             }
//             else
//                 memo.push(pan[i]);
//         }
//         console.log(pan, memo)
//         pan = memo
//         if(flag)break;
//     }

//     if(pan.length <= 2 && pan[0] === pan[1])
//         return 1;
//     else return 0;
// }
