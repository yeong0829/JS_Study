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
    let value = this.className;//class이름 가져오기(여기에선 번호 가져옴-class이름이 번호이기 때문)
    choice(value); //번호에 따른 변수에 값 넣어주기
    location.replace('/A1'); //파일 A1으로 넘어가기
    localStorage.setItem("answer",JSON.stringify(answer));
    localStorage.setItem("question",JSON.stringify(question));
    localStorage.setItem("date",JSON.stringify(date));
    localStorage.setItem("content",JSON.stringify(content));
}

function choice(value){
    switch(value){
        case '1':
            answer = `html, CSS, JS 등을 사용해 동아리 웹사이트 제작, 자유 주제 프로젝트, 웹 사이트 제작 등을 진행합니다. STAC(스마틴 앱 챌린지), KWC(Korea Wi-Content Contest) 등이 있습니다. 앞으로 더욱 많은 공모전 나갈 계획을 세우고 있습니다.`
            question = `프로젝트들과 활동들`
            content = `동아리에서는 어떤 프로젝트와 공모전을 진행하나요?`
            date = `2022/1/12`;
            break;
        case '2' :
            answer =`JS는 java script, 웹 브라우저 내에서 주로 사용하는 객체 기반의 스크립트 프로그래밍 언어를 뜻합니다. 자바스크립트는 세계 코드 사용률 1위 언어로 개발자라면 꼭 알고 있어야하는 언어 중 하나입니다.`;
            question=`JS의 의미`;
            content = `JS스터디에 JS가 무슨 의미인가요?`
            date = `2022/1/12`;
            break;
        case '3' :
            answer =`JS스터디의 담당 선생님은 개발과를 담당하고 계시는 백현정 선생님입니다!`;
            question=`담당 선생님`;
            content = `동아리 담당 선생님은 누구신가요?`
            date = `2022/1/12`;
            
            break;
        case '4' :
            answer =`3월 18일부터 신청받습니다. 뽑는 과정은 동아리 홈페이지에 있는 지원서를 작성한 것을 본 뒤 대면 면접을 통해 동아리원을 뽑습니다.`;
            question=`부원 모집일`
            content = `동아리 부원 모집일은 언제부터인가요? 뽑는 과정은 어떻게 되나요?`;
            date = `2022/1/12`;
            break;
        case '5' :
            answer =`JS스터디에서는 학기 프로젝트, 멘토링, 공모전 등 실력 증진과 다양한 경험을 쌓을 수 있는 활동을 진행합니다.`;
            question=`주요 활동`;
            content = `동아리에서 정확히 어떤 활동을 주요 적으로 진행하는지 궁금해요!`
            date = `2022/1/12`;
            break;
        case '6' :
            answer =`2학년 6명 3학년 4명으로 총 10명의 구성원이 활동하고 있습니다.`;
            question=`구성원`;
            content = `현재 동아리원은 몇 명인가요? 2학년과 3학년이 몇 명씩 있는지도 궁금해요!`
            date = `2022/1/12`;
            break;
        case '7' :
            answer =`인원은 정확하게 정해져 있지는 않지만, 개발과 4명 디자인과 2명 총 6명 정도로 예상합니다.`;
            question=`모집 인원`
            content = `신입생은 몇 명 정도 뽑을 예정인가요? 그리고 과마다 몇 명씩 뽑는지 정해져 있나요?`;
            date = `2022/1/12`;
            break;
        case '8' :
            answer =`동아리 부원들끼리 모여 회식을 합니다. 또 코로나 지침에 맞춰 대면으로 멘토링을 진행하거나 단체 박람회, 전시회 관람 등의 활동이 있습니다.`;
            question=`특별한 행사`
            content = `동아리에서 특별한 행사가 있나요? 따로 만나거나 같이 모이는 등의 활동이 있나요?`
            date = `2022/1/12`;
            break;
        case '9' :
            answer = `개발과는 매주 정해진 날에 모여 회의를 한 후 라인 선후배로 1대1 또는 1 대 다수의 형식으로 원하는 언어를 배우는 식으로 진행합니다.`;
            question=`멘토링 방식`;
            content = `멘토링은 어떤 식으로 진행하나요?`
            date = `2022/1/12`;
            break;
        case '10' :
            answer =`면접 날짜는 3월 24일 목요일이며, 시간은 수요일 이전 지원자는 목요일 아침에/ 목요일 당일 지원자는 종례가 끝난 이후 문자로 연락드리겠습니다.`;
            question=`면접 날짜 및 시간`;
            content = `면접 날짜와 시간이 언제인가요?`
            date = `2022/1/12`;
            break;
    }
}

