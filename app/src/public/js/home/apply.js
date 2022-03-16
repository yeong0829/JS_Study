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
  

  fetch("/apply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert(name.value+"님, JS스터디에 지원신청이 완료되었습니다");
        location.href = "/apply";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("지원신청 중 에러 발생");
    });
};
