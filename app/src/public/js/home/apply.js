"use strict"

const name = document.querySelector("#name"),
  idnum = document.querySelector("#idnum"),
  email = document.querySelector("#email"),
  tel = document.querySelector("#tel"),
  submitBtn = document.querySelector("#submit");
  submitBtn.addEventListener("click", apply);

function calc(){

	// document.getElementById('counter').value = 100;
	// document.getElementById('commnt').value.length;
	// console.log();
	document.getElementById('counter').textContent = `(${frm.commentn.value.length}/500)`;
}

function Checkform()
{ 
	if( name.value == "" ) { 
		alert("성명을 입력해 주세요.");

		return false;
	} 

	if( idnum.value == "" ) { 
		alert("학번을 입력해 주세요.");
		return false;
	} 

	if( email.value == "" ) { 
		alert("이메일을 입력해 주세요.");
		return false;
	} 

	if( tel.value == "" ) { 
		alert("전화번호를 입력해 주세요.");

		return false;
	} 

	if( comment.value == "" ) { 
		alert("지원 사유를 입력해 주세요.");

		return false;
	} 
}


const comment = document.querySelector('#comment');
const counter = document.querySelector('#counter');

let wordlength = 1;
comment.oninput = function(){
    wordlength = comment.value.length;
    counter.innerText = "("+wordlength+"/500)";
}

function apply(){
  if(Checkform()!=false){
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
      frm.onsubmit = Checkform;
      frm.commentn.onkeypress = calc;
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
  }
};
