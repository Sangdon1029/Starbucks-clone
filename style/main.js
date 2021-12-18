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

//arrow btn 선택시 ul list 변환

const arrow_btn1 = document.querySelector("arrow_btn1")
const arrow_btn2 = document.querySelector("arrow_btn2")
const arrow_btn3 = document.querySelector("arrow_btn3")
const arrow_btn4 = document.querySelector("arrow_btn4")
const arrow_btn5 = document.querySelector("arrow_btn5")
const arrow_btn6 = document.querySelector("arrow_btn6")

const first_page = document.querySelector(".first-page")
const second_page = document.querySelector(".second-page")
const third_page = document.querySelector(".third-page")
const fourth_page = document.querySelector(".fourth-page")
const fifth_page = document.querySelector(".fifth-page")

const total = document.querySelector("card-section-cont")

arrow_btn1.addEventListener('click', function(){
    second_page.style.display="none";
    third_page.style.display="none";
    fourth_page.style.display="none";
    fifth_page.style.display="none";
})
