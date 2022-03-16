"use strict"

const comment = document.querySelector('#comment');
const counter = document.querySelector('#counter');

let wordlength = 1;
comment.oninput = function(){
    wordlength = comment.value.length;
    counter.innerText = "("+wordlength+"/500)";
}

const name = document.querySelector("#name"),
  idnum = document.querySelector("#idnum"),
  email = document.querySelector("#email"),
  tel = document.querySelector("#tel"),
  submitBtn = document.querySelector("#submit");
  submitBtn.addEventListener("click", apply);

function apply(){
  const req={
    name: name.value,
    idnum: idnum.value,
    email: email.value,
    tel: tel.value,
    comment: comment.value,
  };
  console.log(req)
}
 
//   fetch("/apply", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(req),
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       if (res.success) {
//         alert(name.value+"님, JS스터디에 지원신청이 완료되었습니다");
//         location.href = "/apply";
//       } else {
//         alert(res.msg);
//       }
//     })
//     .catch((err) => {
//       console.error("지원신청 중 에러 발생");
//     });
// };

//async function getUser() { // 로딩 시 사용자 가져오는 함수}






  // window.onload = getUser; // 화면 로딩 시 getUser 호출
  // // 폼 제출(submit) 시 실행
  // document.getElementById('form').addEventListener('submit', async (e) => {
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   const id = e.target.idnum.value;
  //   const email = e.target.email.value;
  //   const phone = e.target.tel.value;
  //   const reason = e.target.comment.value;
  //   if (!name) {
  //     return alert('이름을 입력하세요');
  //   }else if (!id) {
  //       return alert('아이디를 입력하세요');
  //   }else if (!email) {
  //       return alert('이메일을 입력하세요');
  //   }else if (!phone) {
  //       return alert('전화번호를 입력하세요');
  //   }else if(!reason){
  //       return alert('지원 사유를 입력하세요')
  //   }
  // });