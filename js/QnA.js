const aa =document.querySelectorAll('#title');


let value = 0;//몇번 질문인지
let answer = 0;//답변
let question = 0;//질문
let date = 0;//날짜
let content = 0;//질문 내용

//console.log(zsdf)
aa.forEach((box) =>{
    box.addEventListener('click', onclickBox)
});
function onclickBox(e){
    let value = thie.className;
    choice(value); //몇번 질문인지
    localStorage.setItem("answer",JSON.stringify(answer));
    localStorage.setItem("question",JSON.stringify(question));
    localStorage.setItem("date",JSON.stringify(date));
    localStorage.setItem("question",JSON.stringify(content));
}
function choice(value){
    switch(value){
        case '1':
            answer = ``
            question = `동아리 입부 신청`
            content = ``
            date = ``;
            break;
        case '2' :
            answer =`지금까지 한 프로젝트는 동아리 웹사이트 만들기가 있습니다.`;
            question=`지원 동기`;
            content = `동아리에서는 어떤 프로젝트를 진행하나요?`
            date = ``;
            break;
        case '3' :
            answer = `JS는 java script를 뜻합니다.`;
            question=`JS가 무슨 의미인가요?`;
            content = `JS스터디에 JS는 무슨 의미인가요?`
            date = ``;
            break;
        case '4' :
            answer =`JS스터디의 담당 선생님은 백현정 선생님입니다!`;
            question=`담당 선생님은 누구신가요?`;
            content = `동아리 담당 선생님은 누구신가요?`
            date = ``;
            break;
        case '5' :
            answer =`4월 21일부터 신청 받습니다. 뽑는 과정은 동아리 입부 지원서와 대면 면접을 통해 동아리원을 뽑습니다.`;
            question=`모집일은 언제부터인가요?`;
            content = `동아리 부원 모집일은 언제부터인가요? 뽑는 과정은 어떻게 되나요?`
            date = ``;
            break;
        case '6' :
            answer =`js스터디에서는 학기별 프로젝트, 멘토링, 공모전 등과 같이 실력 증진과 다양한 경험을 쌓을 수 있는 활동을 진행합니다. 주요 공모전은 1,2학년이 같이 팀을 이루어 진행하고(2021년도:STAC), 저희 동아리의 주요 활동인 멘토링은 매주 진행하여 성적 향상에 도움을 줄 수 있습니다.`;
            question=
            content = `정확히 어떤 활동을 주요적으로 진행하는지 궁금해요!`;
            date = ``;
            break;
        case '7' :
            answer =`js스터디는 과와 상관 없이 모두 모집하고 있습니다.`;
            question=
            content = `디자인과도 지원할 수 있나요?`;
            date = ``;
            break;
        case '8' :
            answer =`2학년 6명 3학년 6명으로 구성되어 총 12명이 있습니다.`;
            question=
            content = `현재 동아리원은 몇명인가요? 2학년과 3학년이 몇 명씩 있는지도 궁금해요!`
            date = ``;
            break;
        case '9' :
            answer =`정확하게 정해져 있지는 않지만 4명에서 6명 정도 예상하고 있습니다.`;
            question=`신입생은 몇 명 정도 뽑을 예정인가요?`;
            content = `신입생은 몇 명 정도 뽑을 예정인가요? 그리고 과마다 몇 명씩 뽑는지 정해져있나요?`
            date = ``;
            break;
        case '10' :
            answer =`작년은 코로나로 인하여 전시회 관람등 야외 활동을 하지 못했지만 올해는 작년보다 더 다양한 활동을 예정하고 있습니다.`;
            question=`동아리에서 특별한 행사가 있나요?`;
            content = `동아리에서 특별한 행사가 있나요? 따로 만나거나 같이 모이는 등의 활동이 있나요?`
            date = ``;
            break;
    }
}

