const header = document.querySelector(".header");

const headerHeight = header.offsetHeight; //요소의 총 높이
// console.log(headerHeight); //70

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    // console.log("window.scrollY가 headerHeight보다 큽니다.");
    header.classList.add("header--dark"); // css로 만들어 준 클래스(헤더 다크)를 js에서 추가
  } else {
    // console.log("window.scrollY가 headerHeight보다 작습니다.");
    header.classList.remove("header--dark"); // 제거
  }
});

const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight; // 투명도 상승
});

const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

arrowUp.addEventListener("click", (e) => {
  e.preventDefault(); // e태그의 기존 동작(anchor처럼 휙 끌려올라가는 움직임)을 막고, 움직임을 현행 설정(부드럽게)으로 변경시킴
  window.scrollTo({ top: 0, behavior: "smooth" }); // arrowup(맨 위로 이동 링크-책갈피-)의 작동 움직임을 부드럽게
});

const navbarMenu = document.querySelector(".header__menu");
const navbarToggle = document.querySelector(".header__toggle");
navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});

navbarMenu.addEventListener("click", (e) => {
  //화살표와 같은 이동 움직임 적용
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
