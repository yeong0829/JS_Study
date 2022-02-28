const title = document.querySelector('#title'); //질문
const day = document.querySelector('#day');
const content = document.querySelector('#content'); //질문 내용
const answer = document.querySelector('#answer');

const list = document.querySelector('#list');


let answer_1 = 0;//답변
let question = 0;//질문
let date = 0;//날짜
let content_1 = 0;//질문


if(localStorage.getItem('answer')){
    answer_1 = JSON.parse(localStorage.getItem("answer"));
}
if(localStorage.getItem('question')){
    question = JSON.parse(localStorage.getItem("question"));
}
if(localStorage.getItem('date')){
    date = JSON.parse(localStorage.getItem("date"));
}
if(localStorage.getItem('content')){
    content_1 = JSON.parse(localStorage.getItem("content"));
}
function textChange(){
    content.innerText = content_1;
    day.innerText = date;
    answer.innerText = answer_1;
    list.innerText = question;
    title.innerText = question;
}
textChange();
