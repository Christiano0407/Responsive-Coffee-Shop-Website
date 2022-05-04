//** === Coffee Design ==  */
const menu = document.querySelector("#menuBtn");
const btnBar = document.querySelector("#btnBar");
const navBar = document.querySelector(".header .flex .navBar");

btnBar.addEventListener("click", () => {
  btnBar.classList.toggle("fa-times");
  //<i class="fa-solid fa-xmark"></i>;
  //<i class="fa-solid fa-square-xmark"></i>;
});
