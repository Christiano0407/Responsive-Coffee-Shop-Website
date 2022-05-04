//** === Coffee Design ==  */
const menu = document.querySelector("#menuBtn");
const btnBar = document.querySelector("#btnBar");
const navbar = document.querySelector(".header .flex .navBar");

btnBar.addEventListener("click", () => {
  btnBar.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
