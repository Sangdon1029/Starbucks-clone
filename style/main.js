//일단은 만들어는 봤는데 이게 아닌것 같습니다. 나중에 고쳐야지;;;
const btn1 = document.querySelector(".select-btn1")
const btn2 = document.querySelector(".select-btn2")
btn1.addEventListener('click', function(){
    if(document.querySelectorAll('.slect-btn2')) {
        btn2.classList.remove('focus');
        btn1.classList.toggle('focus');
}})

btn2.addEventListener('click', function(){
    if(document.querySelectorAll('.slect-btn1')) {
        btn1.classList.remove('focus');
        btn2.classList.toggle('focus');
}})