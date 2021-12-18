//일단은 만들어는 봤는데 이게 아닌것 같습니다. 나중에 고쳐야지;;;
const btn1 = document.querySelector(".select-btn1")
const btn2 = document.querySelector(".select-btn2")

btn1.addEventListener('click', function(){
    btn1.classList.add('focus');
    if(btn2.classList.contains('focus')) {
        btn2.classList.remove('focus');
}})

btn2.addEventListener('click', function(){
    btn2.classList.add('focus');
    if(btn1.classList.contains('focus')) {
        btn1.classList.remove('focus');
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


//detail-asort 상세분류 dispaly 속성
const btn_assort = document.querySelector(".selet-asort-btn")
const ul_assort = document.querySelector(".detail-asort")
const li_assort1 = document.querySelector(".asort_li1")
const li_assort2 = document.querySelector(".asort_li2")
const option_btn = document.querySelector(".selet-option-btn")

btn_assort.addEventListener('click', function(){
    if(ul_assort.classList.contains("on")){
        ul_assort.classList.remove('on');
        li_assort1.classList.remove('on');
        li_assort2.classList.remove('on');
    } else {
        ul_assort.classList.add('on');
        li_assort1.classList.add('on');
        li_assort2.classList.add('on');
    }
})

option_btn.addEventListener('mouseleave',function(){
    li_assort1.classList.remove('on');
    li_assort2.classList.remove('on');
    ul_assort.classList.remove('on');
})


const real = document.querySelector("#real")
const e_gift = document.querySelector("#e-gift")
const all_check = document.querySelector("#all-check")

real.addEventListener("click",function(){
    all_check.checked = false;
})

e_gift.addEventListener("click",function(){
    all_check.checked = false;
})