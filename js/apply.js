const comment = document.querySelector('.comment');

let wordlength = 0;
comment.oninput = function(){
    wordlength = comment.value.length;
}