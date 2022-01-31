const aa =document.querySelectorAll('#title');


let value = 0;//몇번 질문인지
let answer = 0;//질문
let question = 0;//답변

aa.forEach((box) =>{
    box.addEventListener('click', onclickBox)
});
function onclickBox(e){
    let value = thie.className;
    choice(value); //몇번 질문인지
}
function choice(value){
    switch(value){
        case '1':
            answer = ``
            break;
        case '2' :
            answer =``;
            question=``;
            break;
        case '3' :
            answer =``;
            question=``;
            break;
        case '4' :
            answer =``;
            question=``;
            break;
        case '5' :
            answer =``;
            question=``;
            break;
        case '6' :
            answer =``;
            question=``;
            break;
        case '4' :
            answer =``;
            question=``;
            break;
        case '5' :
            answer =``;
            question=``;
            break;
        case '6' :
            answer =``;
            question=``;
            break;
        case '7' :
            answer =``;
            question=``;
            break;
        case '8' :
            answer =``;
            question=``;
            break;
    }
}

