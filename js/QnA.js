const aa =document.querySelectorAll('#title');


let value = 0;
aa.forEach((box) =>{
    box.addEventListener('click', onclickBox)
});
function onclickBox(e){
    alert(this.className);
}
