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

const dropdown = document.querySelector(".slect-dropdown")
const select_dropdown = document.querySelector(".select-bottom")
dropdown.addEventListener('click', function(){
    if(dropdown.classList.contains("rotate")){
        dropdown.classList.remove('rotate');
        select_dropdown.classList.remove('bottom-dropdown')
        dropdown.classList.add('rotate2');
    } else {
        dropdown.classList.add('rotate');
        select_dropdown.classList.add('bottom-dropdown')
        dropdown.classList.remove('rotate2');
    }
})

//리펙토링은 추후에 해보겠습니다.

// header top util search 

const btn_search = document.querySelector(".search-btn")
const input_search = document.querySelector(".search-input")
const cont_search = document.querySelector(".search-cont")
btn_search.addEventListener('click', function(){
    if(input_search.classList.contains("on")){
        input_search.classList.remove('on');
        btn_search.classList.remove('on');
        cont_search.classList.remove('on');
    } else {
        input_search.classList.add('on');
        btn_search.classList.add('on');
        cont_search.classList.add('on');
    }
})