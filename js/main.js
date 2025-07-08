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

// 스크롤
// section = home, about, skill, career, license, footer


// // 마우스 조작으로 자동 섹션 이동
// document.addEventListener("DOMContentLoaded", function() {
//     const sections = document.querySelectorAll(".section")
//     let currentSectionNum = 0; // 현재 기준 섹션 변수 만들기
//     let isScrolling = false;   // 스크롤 중인지 확인하는 플래그

//     // 마우스 스크롤(wheel) 이벤트 만들기
//     window.addEventListener("wheel", function(event) {
//         // Ctrl 키 제한 두기 (ctrl 눌리지 않았을 때만 스크롤 동작)
//         if (event.ctrlKey || isScrolling) {
//             return; // Ctrl 키 눌렸거나 스크롤 중이면 스크롤 동작을 하지 않음
//         }

//         // 스크롤 중 플래그 설정
//         isScrolling = true;

//         // 스크롤 시 동작
//         if (event.deltaY > 0) {   // deltaY 양수 : 아래로 스크롤
//             if (currentSectionNum < sections.length - 1) {
//                 currentSectionNum++;
//             }
//         } else {    // deltaY 음수 : 위로 스크롤
//             if (currentSectionNum > 0) {
//                 currentSectionNum--;
//             }
//         }
    
//         // 스크롤 이동을 부드럽게 설정
//         sections[currentSectionNum].scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//         });

//         // 일정 시간(스크롤 애니메이션이 끝날 때까지) 후 스크롤을 다시 허용
//         setTimeout(() => {
//             isScrolling = false;
//         }, 800); // 애니메이션 시간에 맞춰서 조정 가능
//     });
// });



// // 키보드 조작으로 자동 섹션 이동 (왜 컨트롤 누르면 쭉 올라가고 컨트롤+방향키 눌러야 실행되지?)
// document.addEventListener("DOMContentLoaded", function() {
//     const sections = document.querySelectorAll(".section")
//     let currentSectionNum = 0 // 현재 기준 섹션 변수 만들기

//     // 키보드 위아래 방향키 이벤트 만들기
//     window.addEventListener("keydown", function(event){
//         if (event.key === "ArrowDown") {    
//             if (currentSectionNum < sections.length - 1) {
//                 currentSectionNum++
//             }
//         } else if (event.key === "ArrowUp"){
//             if (currentSectionNum > 0) {
//                 currentSectionNum--
//             }
//         }

//         // 스크롤 이동을 부드럽게 설정
//         sections[currentSectionNum].scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//         })
//     }) 
// })


/*
event와 event.deltaY는 JavaScript에서 'wheel' 이벤트와 관련된 객체와 속성
이를 통해 마우스 휠이나 트랙패드를 이용한 스크롤 동작을 감지하고 처리할 수 있음

1. event 객체
event 객체는 사용자가 발생시킨 이벤트에 대한 정보가 담긴 객체
이 객체는 이벤트 핸들러 함수의 인자로 전달되며, 다양한 속성과 메서드를 통해 이벤트의 세부 정보를 제공함

[주요 속성]
event.type: 발생한 이벤트의 유형을 문자열로 나타냄 (예를 들어, wheel 이벤트의 경우 type은 "wheel")
event.target: 이벤트가 발생한 요소를 참조
event.timeStamp: 이벤트 발생 시점을 타임스탬프로 나타냄
event.defaultPrevented: 기본 동작이 취소되었는지를 나타내는 Boolean 값
 */
/*
2. event.deltaY
event.deltaY는 wheel 이벤트 객체의 속성 중 하나
사용자가 마우스 휠이나 트랙패드로 세로 방향 스크롤을 했을 때의 이동 거리와 방향을 나타냄

[deltaY 속성]
deltaY는 스크롤의 수직 이동을 나타내는 값
값이 양수면 사용자가 휠을 아래로 굴리거나 트랙패드를 아래로 스와이프한 것으로 페이지가 아래로 스크롤됨
값이 음수면 사용자가 휠을 위로 굴리거나 트랙패드를 위로 스와이프한 것으로 페이지가 위로 스크롤됨

[deltaY 값의 크기]
deltaY의 절대값이 클수록 사용자가 휠이나 트랙패드를 더 빠르게 움직였다는 것을 나타냄
보통 휠이 한 칸씩 움직일 때의 기본값은 100 또는 -100으로 설정됨 (브라우저나 장치 설정에 따라 달라질 수 있음)
*/