const comment = document.querySelector('.comment');
const counter = document.querySelector('#counter');

let wordlength = 0;
comment.oninput = function(){
    wordlength = comment.value.length;
    counter.innerText = "("+wordlength+"/500)";
}