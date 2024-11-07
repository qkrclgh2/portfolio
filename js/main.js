// 페이지 아래로 스크롤시 header 스타일링 적용
const header = document.querySelector('.header')
// 요소의 총 높이
const headerHeight = header.offsetHeight
// console.log(headerHeight)
// scroll: 스크롤 이벤트가 발생하였다면
document.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight){
        // header에 적용된 css리스트 확인
        header.classList.add('header--dark')
    }else{
        header.classList.remove('header--dark')
    }
})

// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container')
const homeHeight = home.offsetHeight
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight
})

// Arrow up 버튼을 위로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2 ){
        arrowUp.style.opacity = 1
    }else{
        arrowUp.style.opacity = 0
    }
})

// Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu')
const navbarToggle = document.querySelector('.header__toggle')
navbarToggle.addEventListener('click', () => {
    // toggle(): open클래스를 넣었다가 뺏다가 해준다.
    navbarMenu.classList.toggle('open')
})

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open')
})