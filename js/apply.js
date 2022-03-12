const comment = document.querySelector('.comment');
const counter = document.querySelector('#counter');

let wordlength = 0;
comment.oninput = function(){
    wordlength = comment.value.length;
    counter.innerText = "("+wordlength+"/500)";
}
async function getUser() { // 로딩 시 사용자 가져오는 함수
   
}
  window.onload = getUser; // 화면 로딩 시 getUser 호출
  // 폼 제출(submit) 시 실행
  document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const id = e.target.idnum.value;
    const email = e.target.email.value;
    const phone = e.target.tel.value;
    const reason = e.target.comment.value;
    if (!name) {
      return alert('이름을 입력하세요');
    }else if (!id) {
        return alert('아이디를 입력하세요');
    }else if (!email) {
        return alert('이메일을 입력하세요');
    }else if (!phone) {
        return alert('전화번호를 입력하세요');
    }else if(!reason){
        return alert('지원 사유를 입력하세요')
    }
    try {
      await axios.post('/user', { name, id, email,phone,reason });
      getUser();
    } catch (err) {
      console.error(err);
    }
    e.target.username.value = '';
  });